namespace Subscriber.BackendManager.Application
{
    public class ResponseModel
    {
        
        public virtual bool IsSuccess { get; set; }

        public virtual string? Message { get; set; }
    }

    public class ResponseModel <T> : ResponseModel
    {

        public T Data { get; set; }
    }
}
