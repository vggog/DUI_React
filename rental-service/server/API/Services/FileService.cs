namespace API.Services;

public static class FileService
{
    public static async Task<string> SaveFile(IFormFile file)
    {
        if (file == null || file.Length == 0) return null;

        var staticPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "static");
        if (!Directory.Exists(staticPath)) Directory.CreateDirectory(staticPath);

        var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
        var filePath = Path.Combine(staticPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        return $"/static/{fileName}";
    }

    // Новый метод для сохранения списка фотографий
    public static async Task<List<string>> SaveFiles(IEnumerable<IFormFile> files)
    {
        var paths = new List<string>();
        foreach (var file in files)
        {
            var path = await SaveFile(file);
            if (path != null) paths.Add(path);
        }
        return paths;
    }
}