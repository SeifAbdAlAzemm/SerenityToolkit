using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Hosbital.MedicalRecordsRow>;
using MyRow = HosbitalSerenity.Hosbital.MedicalRecordsRow;

namespace HosbitalSerenity.Hosbital;

public interface IMedicalRecordsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class MedicalRecordsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMedicalRecordsRetrieveHandler
{
    public MedicalRecordsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}