using HosbitalSerenity.Modules.Hosbital.Patients;
using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<HosbitalSerenity.Hosbital.PatientsRow>;
using MyRow = HosbitalSerenity.Hosbital.PatientsRow;

namespace HosbitalSerenity.Hosbital;

public interface IPatientsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class PatientsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPatientsRetrieveHandler
{
    public PatientsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        base.PrepareQuery(query);

       // query.Where(MyRow.Fields.PatientName == "Seif");
    }

}