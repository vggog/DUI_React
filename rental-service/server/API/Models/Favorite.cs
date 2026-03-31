namespace API.Models;

public class Favorite
{
    public int Id { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    public int OfferId { get; set; }
    public Offer Offer { get; set; } = null!;
}
