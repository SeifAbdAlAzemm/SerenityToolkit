using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Hosbital.MedicalRecordsRow>;
using MyRow = HosbitalSerenity.Hosbital.MedicalRecordsRow;

namespace HosbitalSerenity.Hosbital;

public interface IMedicalRecordsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MedicalRecordsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMedicalRecordsListHandler
{
    public MedicalRecordsListHandler(IRequestContext context)
            : base(context)
    {
    }
}