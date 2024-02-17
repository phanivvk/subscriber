using MediatR;
using Microsoft.AspNetCore.Mvc;
using Subscriber.BackendManager.Request;

namespace Subscriber.BackendManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IMediator mediator;

        public ProductController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductCreateRequest request,CancellationToken cancellationToken)
        {
            var response = await mediator.Send(request, cancellationToken);
            return response.IsSuccess ? Ok(response) : BadRequest(response);
        }
        
    }
}
