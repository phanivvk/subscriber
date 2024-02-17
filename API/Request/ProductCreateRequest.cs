using MediatR;
using Subscriber.BackendManager.Application;

namespace Subscriber.BackendManager.Request
{
    public class ProductCreateRequest : IRequest<ResponseModel<bool>>
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
    }
}
