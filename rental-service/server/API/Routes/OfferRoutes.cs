namespace API.Routes;

public static class OfferRoutes
{
    public static void MapOffers(RouteGroupBuilder app)
    {
        var offers = app.MapGroup("/offers");

        offers.MapGet("/", API.Controllers.OfferController.GetAllOffers);
        offers.MapGet("/{id:int}", API.Controllers.OfferController.GetOfferById);

        offers.MapPost("/", API.Controllers.OfferController.CreateOffer).DisableAntiforgery();
    }
}
