using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Item
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required.")]
    [StringLength(100, ErrorMessage = "Name can't be longer than 100 characters.")]
    [MinLength(3, ErrorMessage = "Name must be at least 3 characters.")]
    public string Name { get; set; } = string.Empty;
}