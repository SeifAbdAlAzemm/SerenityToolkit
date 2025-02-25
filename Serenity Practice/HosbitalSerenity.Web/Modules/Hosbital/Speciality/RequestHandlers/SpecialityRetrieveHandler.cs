using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Hosbital.SpecialityRow>;
using MyRow = HosbitalSerenity.Hosbital.SpecialityRow;

namespace HosbitalSerenity.Hosbital;

public interface ISpecialityRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class SpecialityRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialityRetrieveHandler
{
    public SpecialityRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}