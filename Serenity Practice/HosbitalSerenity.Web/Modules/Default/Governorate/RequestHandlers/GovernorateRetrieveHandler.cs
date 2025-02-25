using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Default.GovernorateRow>;
using MyRow = HosbitalSerenity.Default.GovernorateRow;

namespace HosbitalSerenity.Default;

public interface IGovernorateRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class GovernorateRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGovernorateRetrieveHandler
{
    public GovernorateRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}