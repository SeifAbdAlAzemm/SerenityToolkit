using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Hosbital.DoctorSpecialitiesRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorSpecialitiesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorSpecialitiesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorSpecialitiesDeleteHandler
{
    public DoctorSpecialitiesDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}