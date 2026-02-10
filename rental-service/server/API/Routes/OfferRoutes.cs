namespace API.Routes;

public static class OfferRoutes
{
    public static void MapOffers(WebApplication app)
    {
        var offers = app.MapGroup("/offers");

        offers.MapGet("/", API.Controllers.OfferController.GetAllOffers);
        offers.MapGet("/{id:int}", API.Controllers.OfferController.GetOfferById);
    }
}
