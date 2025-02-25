using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Hosbital.DoctorSpecialitiesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Hosbital.DoctorSpecialitiesRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorSpecialitiesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorSpecialitiesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorSpecialitiesSaveHandler
{
    public DoctorSpecialitiesSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}