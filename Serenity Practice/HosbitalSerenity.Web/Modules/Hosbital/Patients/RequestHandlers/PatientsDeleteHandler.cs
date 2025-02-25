using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Hosbital.PatientsRow;

namespace HosbitalSerenity.Hosbital;

public interface IPatientsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class PatientsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPatientsDeleteHandler
{
    public PatientsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}