using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("reviews")]
    public class Review : IHasTimestamps
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("text")]
        [StringLength(1024, MinimumLength = 5)]
        public string Text { get; set; }

        [Required]
        [Column("publish_date")]
        public DateTime PublishDate { get; set; } = DateTime.UtcNow;

        [Required]
        [Column("rating")]
        [Range(1, 5)]
        public int Rating { get; set; }

        // Foreign keys
        [Required]
        [Column("author_id")]
        public int AuthorId { get; set; }

        [Required]
        [Column("offer_id")]
        public int OfferId { get; set; }

        // Navigation properties
        [ForeignKey("AuthorId")]
        public virtual User Author { get; set; }

        [ForeignKey("OfferId")]
        public virtual Offer Offer { get; set; }

        [Required]
        [Column("created_at")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        [Column("updated_at")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}