using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Default.GovernorateRow;

namespace HosbitalSerenity.Default;

public interface IGovernorateDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class GovernorateDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGovernorateDeleteHandler
{
    public GovernorateDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}