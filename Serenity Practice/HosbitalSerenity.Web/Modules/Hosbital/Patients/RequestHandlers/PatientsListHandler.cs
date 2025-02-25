using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Hosbital.PatientsRow>;
using MyRow = HosbitalSerenity.Hosbital.PatientsRow;

namespace HosbitalSerenity.Hosbital;

public interface IPatientsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

[DefaultHandler]
public class PatientsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPatientsListHandler
{
    public PatientsListHandler(IRequestContext context)
            : base(context)
    {
    }

}
