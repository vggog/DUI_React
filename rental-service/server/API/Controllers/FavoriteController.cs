using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Controllers;

public class FavoriteController
{
    public static async Task<IResult> GetFavorites(HttpContext context, ApplicationDbContext db, IConfiguration config)
    {
        var userIdClaim = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userIdClaim == null)
        {
            return Results.Unauthorized();
        }

        int userId = int.Parse(userIdClaim);
        
        var baseUrl = config.GetSection("HostSettings:BaseUrl").Value ?? "";

        var favorites = await db.Favorites
            .Where(f => f.UserId == userId)
            .Include(f => f.Offer)
            .Select(f => new OfferDto
            {
                Id = f.Offer.Id.ToString(),
                Title = f.Offer.Title,
                Type = f.Offer.Type.ToString(),
                Price = f.Offer.Price,
                City = new CityDto
                {
                    Title = f.Offer.City.ToString(),
                    Location = new LocationDto
                    {
                        Id = f.Offer.Id.ToString(),
                        Title = f.Offer.City.ToString(),
                        Lat = f.Offer.Latitude,
                        Lng = f.Offer.Longitude
                    }
                },
                Location = new LocationDto
                {
                    Id = f.Offer.Id.ToString(),
                    Title = f.Offer.Title,
                    Lat = f.Offer.Latitude,
                    Lng = f.Offer.Longitude
                },
                IsFavorite = true,
                IsPremium = f.Offer.IsPremium,
                Rating = (double)f.Offer.Rating,
                PreviewImage = f.Offer.PreviewImage.StartsWith("http")
                    ? f.Offer.PreviewImage
                    : $"{baseUrl}{f.Offer.PreviewImage}"
            })
            .ToListAsync();

        return Results.Ok(favorites);
    }

    public static async Task<IResult> ToggleFavorite(int offerId, HttpContext context, ApplicationDbContext db)
    {
        var userIdClaim = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userIdClaim == null)
        {
            return Results.Unauthorized();
        }

        int userId = int.Parse(userIdClaim);

        var existingFavorite = await db.Favorites
            .FirstOrDefaultAsync(f => f.UserId == userId && f.OfferId == offerId);

        if (existingFavorite != null)
        {
            // Remove from favorites
            db.Favorites.Remove(existingFavorite);
            await db.SaveChangesAsync();
            return Results.Ok(new { isFavorite = false });
        }
        else
        {
            // Add to favorites
            var favorite = new Models.Favorite
            {
                UserId = userId,
                OfferId = offerId
            };
            db.Favorites.Add(favorite);
            await db.SaveChangesAsync();
            return Results.Ok(new { isFavorite = true });
        }
    }
}
