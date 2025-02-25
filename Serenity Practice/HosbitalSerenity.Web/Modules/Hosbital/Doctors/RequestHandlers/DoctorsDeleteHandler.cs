using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Hosbital.DoctorsRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorsDeleteHandler
{
    public DoctorsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}