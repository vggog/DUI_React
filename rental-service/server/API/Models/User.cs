using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;

[Table("users")]
public class User : IHasTimestamps
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("username")]
    [StringLength(15, MinimumLength = 1)]
    public string Username { get; set; }

    [Required]
    [Column("email")]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [Column("password")]
    public string Password { get; set; }

    [Required]
    [Column("user_type")]
    public UserType UserType { get; set; }

    [Column("avatar")]
    public string? Avatar { get; set; }

    // Navigation properties
    public virtual ICollection<Offer> Offers { get; set; } = new List<Offer>();
    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    [Required]
    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Required]
    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}

public enum UserType
{
    Normal,
    Pro
}
