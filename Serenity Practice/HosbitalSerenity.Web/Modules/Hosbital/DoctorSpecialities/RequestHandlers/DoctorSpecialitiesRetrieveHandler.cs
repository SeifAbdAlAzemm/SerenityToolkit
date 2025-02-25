using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Hosbital.DoctorSpecialitiesRow>;
using MyRow = HosbitalSerenity.Hosbital.DoctorSpecialitiesRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorSpecialitiesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorSpecialitiesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorSpecialitiesRetrieveHandler
{
    public DoctorSpecialitiesRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}