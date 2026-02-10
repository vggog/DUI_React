using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;

[Table("offers")]
public class Offer : IHasTimestamps
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("title")]
    [StringLength(100, MinimumLength = 10)]
    public string Title { get; set; }

    [Required]
    [Column("description")]
    [StringLength(1024, MinimumLength = 20)]
    public string Description { get; set; }

    [Required]
    [Column("publish_date")]
    public DateTime PublishDate { get; set; } = DateTime.UtcNow;

    [Required]
    [Column("city")]
    public City City { get; set; }

    [Required]
    [Column("preview_image")]
    public string PreviewImage { get; set; }

    [Required]
    [Column("photos")]
    public List<string> Photos { get; set; } = new List<string>();

    [Required]
    [Column("is_premium")]
    public bool IsPremium { get; set; }

    [Required]
    [Column("is_favorite")]
    public bool IsFavorite { get; set; }

    [Required]
    [Range(1.0, 5.0)]
    [Column("rating", TypeName = "decimal(2,1)")]
    public decimal Rating { get; set; }

    [Required]
    [Column("type")]
    public OfferType Type { get; set; }

    [Required]
    [Column("rooms")]
    [Range(1, 8)]
    public int Rooms { get; set; }

    [Required]
    [Column("guests")]
    [Range(1, 10)]
    public int Guests { get; set; }

    [Required]
    [Column("price")]
    [Range(100, 100000)]
    public int Price { get; set; }

    [Required]
    [Column("features")]
    public List<Feature> Features { get; set; } = new List<Feature>();

    [Column("comments_count")]
    public int CommentsCount { get; set; } = 0;

    [Required]
    [Column("latitude")]
    public float Latitude { get; set; }

    [Required]
    [Column("longitude")]
    public float Longitude { get; set; }

    // Foreign keys
    [Required]
    [Column("author_id")]
    public int AuthorId { get; set; }

    // Navigation properties
    [ForeignKey("AuthorId")]
    public virtual User Author { get; set; }
    
    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    [Required]
    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Required]
    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}

public enum City
{
    Paris,
    Cologne,
    Brussels,
    Amsterdam,
    Hamburg,
    Dusseldorf
}

public enum OfferType
{
    Apartment,
    House,
    Room,
    Hotel
}

public enum Feature
{
    Breakfast,
    AirConditioning,
    LaptopFriendlyWorkspace,
    BabySeat,
    Washer,
    Towels,
    Fridge
}
