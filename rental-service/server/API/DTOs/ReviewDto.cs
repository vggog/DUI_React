namespace API.DTOs;

public class ReviewDto
{
    public string Id { get; set; }
    public string Comment { get; set; }
    public double Rating { get; set; }
    public string Date { get; set; }
    public ReviewUserDto User { get; set; }
}

public class ReviewUserDto
{
    public string Name { get; set; }
    public string AvatarUrl { get; set; }
    public bool IsPro { get; set; }
}