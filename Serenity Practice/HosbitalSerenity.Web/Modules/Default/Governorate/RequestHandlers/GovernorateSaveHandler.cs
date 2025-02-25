using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Default.GovernorateRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Default.GovernorateRow;

namespace HosbitalSerenity.Default;

public interface IGovernorateSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class GovernorateSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGovernorateSaveHandler
{
    public GovernorateSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}