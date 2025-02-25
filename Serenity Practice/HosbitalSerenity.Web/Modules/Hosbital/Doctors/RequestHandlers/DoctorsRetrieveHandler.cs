using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Hosbital.DoctorsRow>;
using MyRow = HosbitalSerenity.Hosbital.DoctorsRow;

namespace HosbitalSerenity.Hosbital;

public interface IDoctorsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class DoctorsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorsRetrieveHandler
{
    public DoctorsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}