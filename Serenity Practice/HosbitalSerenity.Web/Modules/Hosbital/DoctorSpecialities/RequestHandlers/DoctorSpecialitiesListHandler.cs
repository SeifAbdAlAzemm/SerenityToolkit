using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Hosbital.DoctorSpecialitiesRow>;
using MyRow = HosbitalSerenity.Hosbital.DoctorSpecialitiesRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorSpecialitiesListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorSpecialitiesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorSpecialitiesListHandler
{
    public DoctorSpecialitiesListHandler(IRequestContext context)
            : base(context)
    {
    }
}