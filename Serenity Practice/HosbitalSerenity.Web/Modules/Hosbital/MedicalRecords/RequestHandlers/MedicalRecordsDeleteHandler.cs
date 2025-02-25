using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Hosbital.MedicalRecordsRow;

namespace HosbitalSerenity.Hosbital;

public interface IMedicalRecordsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class MedicalRecordsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMedicalRecordsDeleteHandler
{
    public MedicalRecordsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}