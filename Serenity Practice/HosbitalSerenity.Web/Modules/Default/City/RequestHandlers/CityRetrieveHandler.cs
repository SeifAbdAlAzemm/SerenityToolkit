using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Default.CityRow>;
using MyRow = HosbitalSerenity.Default.CityRow;

namespace HosbitalSerenity.Default;

public interface ICityRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class CityRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICityRetrieveHandler
{
    public CityRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}