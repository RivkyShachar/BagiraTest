using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using server.DTOs;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ItemsController(ApplicationDbContext context) : ControllerBase
{
    private readonly ApplicationDbContext _context = context;

    // GET: api/items
    [HttpGet]
    public async Task<IActionResult> GetItems()
    {
        var items = await _context.Items.ToListAsync();

        if (items == null || items.Count == 0)
        {
            return NotFound("No items found.");
        }

        return Ok(items);
    }

    // POST: api/items
    [HttpPost]
    public async Task<IActionResult> CreateItem([FromBody] CreateItemDto createItemDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        if (string.IsNullOrWhiteSpace(createItemDto.Name))
        {
            return BadRequest("Name is required and cannot be empty.");
        }

        var newItem = new Item
        {
            Name = createItemDto.Name
        };

        _context.Items.Add(newItem);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetItems), new { id = newItem.Id }, newItem);
    }

    // DELETE: api/items/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItem(int id)
    {
        var item = await _context.Items.FindAsync(id);

        if (item == null)
        {
            return NotFound("Item not found.");
        }

        _context.Items.Remove(item);
        await _context.SaveChangesAsync();

        return Ok($"Item with ID {id} has been deleted.");
    }
}
