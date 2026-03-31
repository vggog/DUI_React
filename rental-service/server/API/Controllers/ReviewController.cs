using System.Security.Claims;
using API.Data;
using API.DTOs;
using API.Models;
using API.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public static class ReviewController
{
    public static async Task<IResult> AddReview(int offerId, HttpContext context, ApplicationDbContext db, IConfiguration config)
    {
        // Достаем ID из Claims (то, что мы положили в токен при логине)
        var userIdClaim = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userIdClaim == null) return Results.Unauthorized();

        int userId = int.Parse(userIdClaim);
        var body = await context.Request.ReadFromJsonAsync<ReviewRequest>();

        if (body == null || string.IsNullOrEmpty(body.Comment) || body.Rating == 0)
        {
            throw ApiException.BadRequest("Не хватает данных для комментария");
        }

        var review = new Review
        {
            Text = body.Comment,
            Rating = body.Rating,
            OfferId = offerId,
            AuthorId = userId, // Берём из токена
            PublishDate = DateTime.UtcNow
        };

        db.Reviews.Add(review);
        await db.SaveChangesAsync();

        // Загружаем автора для возврата полного DTO
        await db.Entry(review).Reference(r => r.Author).LoadAsync();

        var baseUrl = config["HostSettings:BaseUrl"];

        // Возвращаем полный DTO
        var reviewDto = new ReviewDto
        {
            Id = review.Id.ToString(),
            Comment = review.Text,
            Rating = (double)review.Rating,
            Date = review.PublishDate.ToString("o"),
            User = new ReviewUserDto
            {
                Name = review.Author?.Username ?? "Unknown",
                AvatarUrl = review.Author?.Avatar != null
                    ? (review.Author.Avatar.StartsWith("http") ? review.Author.Avatar : $"{baseUrl}{review.Author.Avatar}")
                    : "",
                IsPro = review.Author?.UserType == UserType.Pro
            }
        };

        return Results.Json(reviewDto, statusCode: 201);
    }
    
    public static async Task<IResult> GetReviewsByOfferId(int offerId, ApplicationDbContext db, IConfiguration config)
    {
        var baseUrl = config["HostSettings:BaseUrl"];

        var reviews = await db.Reviews
            .Include(r => r.Author)
            .Where(r => r.OfferId == offerId)
            .OrderByDescending(r => r.PublishDate)
            .ToListAsync();

        var adaptedReviews = reviews.Select(r => new ReviewDto
        {
            Id = r.Id.ToString(),
            Comment = r.Text,
            Rating = (double)r.Rating,
            Date = r.PublishDate.ToString("o"), // ISO 8601 [cite: 302]
            User = new ReviewUserDto
            {
                Name = r.Author?.Username ?? "Unknown",
                AvatarUrl = r.Author?.Avatar != null
                    ? (r.Author.Avatar.StartsWith("http") ? r.Author.Avatar : $"{baseUrl}{r.Author.Avatar}")
                    : "",
                IsPro = r.Author?.UserType == UserType.Pro
            }
        }).ToList();

        return Results.Ok(adaptedReviews);
    }

    // Класс для приема данных (аналог req.body)
    public record ReviewRequest(string Comment, int Rating);
}