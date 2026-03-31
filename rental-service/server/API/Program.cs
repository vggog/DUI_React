using System.Text;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Middleware;
using API.Routes;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Берем секрет из настроек (как JWT_SECRET в лабе)
var jwtSecret = builder.Configuration["HostSettings:JwtSecret"] ?? "super_secret_key_123456789_fdshadsbffbdsfbdfbasjdaj";

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret))
        };
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy.WithOrigins("http://localhost", "http://localhost:5173")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials(); // Позволяет передавать Cookie/Auth заголовки
    });
});

builder.Services.AddAuthorization();

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                       ?? "Host=db;Port=5432;Database=appdb;Username=postgres;Password=postgres";

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString)
);

var app = builder.Build();

app.UseCors("FrontendPolicy");
app.UseMiddleware<ExceptionHandlingMiddleware>();

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
// else
// {
//     app.UseHttpsRedirection();
// }

app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();

app.MapApiRoutes();
app.MapPost("/register", API.Controllers.UserController.Registration)
    .DisableAntiforgery();


app.Run();
