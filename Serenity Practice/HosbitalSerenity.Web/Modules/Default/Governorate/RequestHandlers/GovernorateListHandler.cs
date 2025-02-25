using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Default.GovernorateRow>;
using MyRow = HosbitalSerenity.Default.GovernorateRow;

namespace HosbitalSerenity.Default;

public interface IGovernorateListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class GovernorateListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGovernorateListHandler
{
    public GovernorateListHandler(IRequestContext context)
            : base(context)
    {
    }
}