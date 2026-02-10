using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Routes;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                       ?? "Host=db;Port=5432;Database=appdb;Username=postgres;Password=postgres";

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString)
);

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    const int maxAttempts = 12;
    var attempt = 0;
    while (true)
    {
        try
        {
            db.Database.Migrate();
            break;
        }
        catch (Exception ex)
        {
            attempt++;
            if (attempt >= maxAttempts)
            {
                Console.WriteLine($"Could not connect to database after {attempt} attempts: {ex.Message}");
                throw;
            }
            Console.WriteLine($"Database not ready yet (attempt {attempt}/{maxAttempts}): {ex.Message}");
            Thread.Sleep(5000);
        }
    }
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    app.UseHttpsRedirection();
}

app.MapApiRoutes();

app.Run();
