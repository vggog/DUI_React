using Microsoft.EntityFrameworkCore;
using API.Data;
using API.DTOs;
using API.Exceptions;
using API.Models;
using API.Services;

namespace API.Controllers;

public static class OfferController
{
    public static async Task<IResult> GetAllOffers(HttpContext context, ApplicationDbContext db, IConfiguration config)
    {
        var baseUrl = config["HostSettings:BaseUrl"];
        var offers = await db.Offers.ToListAsync();

        // Get user favorites if authenticated
        var userIdClaim = context.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
        List<int> favoriteOfferIds = new List<int>();

        if (userIdClaim != null && int.TryParse(userIdClaim, out int userId))
        {
            favoriteOfferIds = await db.Favorites
                .Where(f => f.UserId == userId)
                .Select(f => f.OfferId)
                .ToListAsync();
        }

        var adaptedOffers = offers.Select(o => AdaptOfferToClient(o, baseUrl, favoriteOfferIds.Contains(o.Id))).ToList();

        return Results.Ok(adaptedOffers);
    }

    public static async Task<IResult> GetOfferById(int id, HttpContext context, ApplicationDbContext db, IConfiguration config)
    {
        var baseUrl = config["HostSettings:BaseUrl"];

        // Находим оффер и подгружаем автора (аналог include в Sequelize)
        var offer = await db.Offers
            .Include(o => o.Author)
            .FirstOrDefaultAsync(o => o.Id == id);

        // Если не найден — кидаем нашу ошибку из Задания 1
        if (offer == null)
        {
            throw ApiException.BadRequest("Offer not found");
        }

        // Check if offer is favorited by current user
        bool isFavorite = false;
        var userIdClaim = context.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
        if (userIdClaim != null && int.TryParse(userIdClaim, out int userId))
        {
            isFavorite = await db.Favorites.AnyAsync(f => f.UserId == userId && f.OfferId == id);
        }

        var adaptedOffer = AdaptFullOfferToClient(offer, baseUrl, isFavorite);
        return Results.Ok(adaptedOffer);
    }
    
    public static async Task<IResult> CreateOffer(HttpContext context, ApplicationDbContext db)
    {
        var form = await context.Request.ReadFormAsync();

        // Проверка превью (аналог if (!req.files?.previewImage))
        var previewFile = form.Files["previewImage"];
        if (previewFile == null)
            throw ApiException.BadRequest("Превью изображение обязательно для загрузки");

        // Сохраняем файлы
        var previewImagePath = await FileService.SaveFile(previewFile);
        var photosPaths = await FileService.SaveFiles(form.Files.GetFiles("photos"));

        // Парсим удобства (в лабе они могут прийти строкой через запятую)
        var featuresRaw = form["features"].ToString();
        var features = featuresRaw.Split(',', StringSplitOptions.RemoveEmptyEntries)
            .Select(f => Enum.Parse<Feature>(f.Trim(), true))
            .ToList();

        var offer = new Offer
        {
            Title = form["title"],
            Description = form["description"],
            City = Enum.Parse<City>(form["city"], true),
            PreviewImage = previewImagePath,
            Photos = photosPaths,
            IsPremium = bool.Parse(form["isPremium"]),
            IsFavorite = bool.Parse(form["isFavorite"]),
            Rating = decimal.Parse(form["rating"]),
            Type = Enum.Parse<OfferType>(form["type"], true),
            Rooms = int.Parse(form["rooms"]),
            Guests = int.Parse(form["guests"]),
            Price = int.Parse(form["price"]),
            Features = features,
            CommentsCount = int.Parse(form["commentsCount"]),
            Latitude = float.Parse(form["latitude"]),
            Longitude = float.Parse(form["longitude"]),
            AuthorId = int.Parse(form["userId"]),
            PublishDate = DateTime.UtcNow
        };

        db.Offers.Add(offer);
        await db.SaveChangesAsync();

        return Results.Json(offer, statusCode: 201);
    }
    
    private static readonly Dictionary<string, (float Lat, float Lng)> CityCoordinates = new()
    {
        { "Paris", (48.8566f, 2.3522f) },
        { "Cologne", (50.9375f, 6.9603f) },
        { "Brussels", (50.8503f, 4.3517f) },
        { "Amsterdam", (52.3676f, 4.9041f) },
        { "Hamburg", (53.5511f, 9.9937f) },
        { "Dusseldorf", (51.2277f, 6.7735f) }
    };

    private static OfferDto AdaptOfferToClient(Offer offer, string baseUrl, bool isFavorite = false)
    {
        var cityName = offer.City.ToString();
        var coords = CityCoordinates.GetValueOrDefault(cityName, (0, 0));

        return new OfferDto
        {
            Id = offer.Id.ToString(),
            Title = offer.Title,
            Type = offer.Type.ToString().ToLower(),
            Price = offer.Price,
            IsFavorite = isFavorite,
            IsPremium = offer.IsPremium,
            Rating = (double)offer.Rating,
            PreviewImage = offer.PreviewImage.StartsWith("http")
                ? offer.PreviewImage
                : $"{baseUrl}{offer.PreviewImage}",
            City = new CityDto
            {
                Title = cityName,
                Zoom = 13,
                Location = new LocationDto
                {
                    Id = offer.City.ToString(),
                    Title = cityName,
                    Lat = coords.Lat,
                    Lng = coords.Lng,
                    Zoom = 14
                }
            },
            Location = new LocationDto
            {
                Id = offer.Id.ToString(),
                Title = cityName,
                Lat = offer.Latitude,
                Lng = offer.Longitude,
                Zoom = 16
            }
        };
    }
    
    private static FullOfferDto AdaptFullOfferToClient(Offer offer, string baseUrl, bool isFavorite = false)
    {
        // Базовая адаптация через уже созданный метод
        var baseDto = AdaptOfferToClient(offer, baseUrl, isFavorite);

        return new FullOfferDto
        {
            Id = baseDto.Id,
            Title = baseDto.Title,
            Type = baseDto.Type,
            Price = baseDto.Price,
            City = baseDto.City,
            Location = baseDto.Location,
            IsFavorite = baseDto.IsFavorite,
            IsPremium = baseDto.IsPremium,
            Rating = baseDto.Rating,
            PreviewImage = baseDto.PreviewImage,
            // Дополнительные поля для полной версии
            Description = offer.Description,
            Bedrooms = offer.Rooms,
            Goods = offer.Features.Select(f => f.ToString()).ToList(),
            Images = offer.Photos.Select(p => p.StartsWith("http") ? p : $"{baseUrl}{p}").ToList(),
            Host = new HostDto
            {
                Name = offer.Author.Username,
                IsPro = offer.Author.UserType == UserType.Pro,
                AvatarUrl = offer.Author.Avatar.StartsWith("http") ? offer.Author.Avatar : $"{baseUrl}{offer.Author.Avatar}"
            },
            MaxAdults = offer.Guests,
            Neighbors = new List<string>() // TODO: implement neighbors logic
        };
    }
}
