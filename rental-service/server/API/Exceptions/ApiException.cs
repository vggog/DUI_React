namespace API.Exceptions;

public class ApiException(int statusCode, string message) : Exception(message)
{
    public int StatusCode { get; } = statusCode;

    public static ApiException BadRequest(string message) => new(400, message);
    public static ApiException Unauthorized(string message) => new(401, message);
    public static ApiException Forbidden(string message) => new(403, message);
    public static ApiException Internal(string message) => new(500, message);
}