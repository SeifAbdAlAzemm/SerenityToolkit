using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = HosbitalSerenity.Hosbital.SpecialityRow;

namespace HosbitalSerenity.Hosbital;

public interface ISpecialityDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class SpecialityDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISpecialityDeleteHandler
{
    public SpecialityDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}