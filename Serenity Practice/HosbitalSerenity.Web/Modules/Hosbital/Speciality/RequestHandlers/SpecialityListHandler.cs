using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Hosbital.SpecialityRow>;
using MyRow = HosbitalSerenity.Hosbital.SpecialityRow;

namespace HosbitalSerenity.Hosbital;

public interface ISpecialityListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class SpecialityListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialityListHandler
{
    public SpecialityListHandler(IRequestContext context)
            : base(context)
    {
    }
}