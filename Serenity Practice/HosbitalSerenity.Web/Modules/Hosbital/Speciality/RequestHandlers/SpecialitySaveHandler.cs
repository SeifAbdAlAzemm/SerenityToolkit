using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Hosbital.SpecialityRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Hosbital.SpecialityRow;

namespace HosbitalSerenity.Hosbital;

public interface ISpecialitySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class SpecialitySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialitySaveHandler
{
    public SpecialitySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}