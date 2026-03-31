namespace API.Routes;

public static class IndexRoutes
{
    public static void MapApiRoutes(this WebApplication app)
    {
        var api = app.MapGroup("/api");

        OfferRoutes.MapOffers(api);
        ReviewRoutes.MapReviewRoutes(api);
        UserRoutes.MapReviewRoutes(api);
        FavoriteRoutes.MapFavoriteRoutes(api);
    }
}
