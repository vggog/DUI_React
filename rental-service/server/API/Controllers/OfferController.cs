using Microsoft.EntityFrameworkCore;
using API.Data;

namespace API.Controllers;

public static class OfferController
{
    public static async Task<IResult> GetAllOffers(ApplicationDbContext db)
    {
        var offers = await db.Offers
            .Include(o => o.Author)
            .Include(o => o.Reviews)
            .ToListAsync();
        return Results.Ok(offers);
    }

    public static async Task<IResult> GetOfferById(int id, ApplicationDbContext db)
    {
        var offer = await db.Offers
            .Include(o => o.Author)
            .Include(o => o.Reviews)
            .FirstOrDefaultAsync(o => o.Id == id);
        return offer is not null ? Results.Ok(offer) : Results.NotFound();
    }
}
