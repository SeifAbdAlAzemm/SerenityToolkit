using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Default.CityRow>;
using MyRow = HosbitalSerenity.Default.CityRow;

namespace HosbitalSerenity.Default;

public interface ICityListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class CityListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICityListHandler
{
    public CityListHandler(IRequestContext context)
            : base(context)
    {
    }
}