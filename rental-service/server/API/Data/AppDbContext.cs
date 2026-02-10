using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Offer> Offers { get; set; }
    public DbSet<Review> Reviews { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        modelBuilder.Entity<Offer>()
            .Property(o => o.Photos)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()
            );

        modelBuilder.Entity<Offer>()
            .Property(o => o.Features)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
                    .Select(f => Enum.Parse<Feature>(f))
                    .ToList()
            );

        modelBuilder.Entity<Review>()
            .HasOne(r => r.Author)
            .WithMany(u => u.Reviews)
            .HasForeignKey(r => r.AuthorId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Review>()
            .HasOne(r => r.Offer)
            .WithMany(o => o.Reviews)
            .HasForeignKey(r => r.OfferId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Offer>()
            .HasOne(o => o.Author)
            .WithMany(u => u.Offers)
            .HasForeignKey(o => o.AuthorId)
            .OnDelete(DeleteBehavior.Restrict);
    }

    public override int SaveChanges()
    {
        UpdateTimestamps();
        return base.SaveChanges();
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        UpdateTimestamps();
        return base.SaveChangesAsync(cancellationToken);
    }

    private void UpdateTimestamps()
    {
        var entries = ChangeTracker.Entries().Where(e => e.Entity is IHasTimestamps && (e.State == EntityState.Added || e.State == EntityState.Modified));
        var now = DateTime.UtcNow;
        foreach (var entry in entries)
        {
            var entity = (IHasTimestamps)entry.Entity;
            if (entry.State == EntityState.Added)
            {
                entity.CreatedAt = now;
            }
            entity.UpdatedAt = now;
        }
    }
}