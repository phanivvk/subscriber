using MediatR;
using Subscriber.BackendManager.Application;
using Subscriber.BackendManager.Request;

namespace Subscriber.BackendManager.Handlers
{
    public class ProductCreateHandler : IRequestHandler<ProductCreateRequest, ResponseModel<bool>>
    {
        public ProductCreateHandler() { }

        public async Task<ResponseModel<bool>> Handle(ProductCreateRequest request, CancellationToken cancellationToken)
        {
            ResponseModel<bool> responseModel = new ResponseModel<bool>();


            await Task.Factory.StartNew(() =>
            {

            });

            return responseModel;
        }
    }
}
