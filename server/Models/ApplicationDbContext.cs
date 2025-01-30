using Microsoft.EntityFrameworkCore;

namespace server.Models;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Item> Items { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Item>().HasData(
            new Item { Id = 1, Name = "Example 1" },
            new Item { Id = 2, Name = "Example 2" }
        );
    }
}