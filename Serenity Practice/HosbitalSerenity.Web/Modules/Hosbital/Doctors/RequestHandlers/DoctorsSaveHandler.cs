using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Hosbital.DoctorsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Hosbital.DoctorsRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorsSaveHandler
{
    public DoctorsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}