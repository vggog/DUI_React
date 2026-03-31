namespace API.DTOs;

public class OfferDto
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Type { get; set; }
    public int Price { get; set; }
    public CityDto City { get; set; }
    public LocationDto Location { get; set; }
    public bool IsFavorite { get; set; }
    public bool IsPremium { get; set; }
    public double Rating { get; set; }
    public string PreviewImage { get; set; }
}

public class CityDto
{
    public string Title { get; set; }
    public LocationDto Location { get; set; }
    public int Zoom { get; set; } = 13;
}

public class LocationDto
{
    public string Id { get; set; }
    public string Title { get; set; }
    public float Lat { get; set; }
    public float Lng { get; set; }
    public int Zoom { get; set; } = 13;
}