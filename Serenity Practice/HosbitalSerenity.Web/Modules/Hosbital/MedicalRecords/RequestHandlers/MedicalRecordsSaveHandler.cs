using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Hosbital.MedicalRecordsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Hosbital.MedicalRecordsRow;

namespace HosbitalSerenity.Hosbital;

public interface IMedicalRecordsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MedicalRecordsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMedicalRecordsSaveHandler
{
    public MedicalRecordsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}