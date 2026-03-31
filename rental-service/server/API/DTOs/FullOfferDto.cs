using API.DTOs;

namespace API.DTOs;

public class FullOfferDto : OfferDto
{
    public string Description { get; set; }
    public int Bedrooms { get; set; }
    public List<string> Goods { get; set; } // Наши Features
    public HostDto Host { get; set; }
    public List<string> Images { get; set; }
    public int MaxAdults { get; set; }
    public List<string> Neighbors { get; set; }
}

public class HostDto
{
    public string Name { get; set; }
    public bool IsPro { get; set; }
    public string AvatarUrl { get; set; }
}