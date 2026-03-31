using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Data;
using API.Models;
using API.Exceptions;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using BC = BCrypt.Net.BCrypt; // Аналог import bcrypt [cite: 96]

namespace API.Controllers;

public static class UserController
{
    public static async Task<IResult> Registration(
        HttpContext context, 
        ApplicationDbContext db)
    {
        var form = await context.Request.ReadFormAsync();
        
        var email = form["email"];
        var password = form["password"];
        var username = form["username"];
        var userTypeStr = form["userType"];
        var avatarFile = form.Files["avatar"];

        if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            throw ApiException.BadRequest("Некорректный email или password");

        var candidate = await db.Users.FirstOrDefaultAsync(u => u.Email == email.ToString());
        if (candidate != null)
            throw ApiException.BadRequest("Пользователь с таким email уже существует");

        var avatarPath = await FileService.SaveFile(avatarFile);

        var hashPassword = BC.HashPassword(password, 5);

        var user = new User
        {
            Email = email,
            Password = hashPassword,
            Username = username,
            Avatar = avatarPath,
            UserType = Enum.Parse<UserType>(userTypeStr, true) // normal/pro [cite: 113, 124]
        };

        db.Users.Add(user);
        await db.SaveChangesAsync();

        return Results.Ok(new { 
            user = new { 
                id = user.Id, 
                email = user.Email, 
                avatarUrl = user.Avatar 
            } 
        });
    }
    
    public static async Task<IResult> Login(HttpContext context, ApplicationDbContext db, IConfiguration config)
    {
        var body = await context.Request.ReadFromJsonAsync<LoginRequest>();
        if (body == null) return Results.BadRequest();

        var user = await db.Users.FirstOrDefaultAsync(u => u.Email == body.Email);
        if (user == null || !BC.Verify(body.Password, user.Password))
        {
            throw ApiException.BadRequest("Неверный email или пароль");
        }

        // Генерируем токен (аналог jwt.sign)
        var jwtSecret = config["HostSettings:JwtSecret"] ?? "super_secret_key_123456789_fdshadsbffbdsfbdfbasjdaj";
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[] {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email)
        };

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddHours(24),
            signingCredentials: credentials);

        return Results.Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
    }

    public record LoginRequest(string Email, string Password);
}