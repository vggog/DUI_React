namespace API.Routes;

public static class IndexRoutes
{
    public static void MapApiRoutes(this WebApplication app)
    {
        OfferRoutes.MapOffers(app);
    }
}
