using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Default.CityRow;

namespace HosbitalSerenity.Default;

public interface ICityDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class CityDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICityDeleteHandler
{
    public CityDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}