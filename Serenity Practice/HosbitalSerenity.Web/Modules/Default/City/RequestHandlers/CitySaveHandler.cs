using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Default.CityRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Default.CityRow;

namespace HosbitalSerenity.Default;

public interface ICitySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class CitySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICitySaveHandler
{
    public CitySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}