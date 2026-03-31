using API.Controllers;

namespace API.Routes;

public static class FavoriteRoutes
{
    public static void MapFavoriteRoutes(this RouteGroupBuilder group)
    {
        var favorites = group.MapGroup("/favorites");

        favorites.MapGet("/", FavoriteController.GetFavorites)
            .RequireAuthorization();

        favorites.MapPost("/{offerId}", FavoriteController.ToggleFavorite)
            .RequireAuthorization();
    }
}
