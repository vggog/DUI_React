using System.Security.Claims;

namespace API.Routes;

public static class UserRoutes
{
    public static void MapReviewRoutes(this RouteGroupBuilder app)
    {
        app.MapPost("/login", API.Controllers.UserController.Login);
        app.MapPost("/register", API.Controllers.UserController.Registration)
            .DisableAntiforgery();
        
        app.MapGet("/login", async (HttpContext context, API.Data.ApplicationDbContext db, IConfiguration config) => {
            // Аналог checkAuth — возвращает данные текущего пользователя
            var userIdClaim = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userIdClaim == null) return Results.Unauthorized();

            int userId = int.Parse(userIdClaim);
            var user = await db.Users.FindAsync(userId);

            if (user == null) return Results.Unauthorized();

            var baseUrl = config["HostSettings:BaseUrl"];

            return Results.Ok(new {
                id = user.Id,
                email = user.Email,
                avatarUrl = user.Avatar != null
                    ? (user.Avatar.StartsWith("http") ? user.Avatar : $"{baseUrl}{user.Avatar}")
                    : null
            });
        }).RequireAuthorization();

        app.MapDelete("/logout", () => Results.NoContent());
    }
}