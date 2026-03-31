namespace API.Routes;

public static class ReviewRoutes
{
    public static void MapReviewRoutes(this RouteGroupBuilder app)
    {
        var group = app.MapGroup("/comments");

        // Получение отзывов: GET /comments/{offerId} [cite: 314]
        group.MapGet("/{offerId:int}", API.Controllers.ReviewController.GetReviewsByOfferId);

        // Добавление отзыва: POST /comments/{offerId} [cite: 285]
        group.MapPost("/{offerId:int}", API.Controllers.ReviewController.AddReview)
            .RequireAuthorization();
    }
}