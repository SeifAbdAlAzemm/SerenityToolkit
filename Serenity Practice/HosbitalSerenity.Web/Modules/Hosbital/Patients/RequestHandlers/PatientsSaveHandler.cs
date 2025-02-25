using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Hosbital.PatientsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Hosbital.PatientsRow;

namespace HosbitalSerenity.Hosbital;

public interface IPatientsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PatientsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPatientsSaveHandler
{
    public PatientsSaveHandler(IRequestContext context)
        : base(context)
    {
    }

    protected override void BeforeSave()
    {
        base.BeforeSave();

        var connection = this.Connection;

        if (IsCreate)
        {
            // Check if a patient with the same name and date of birth already exists
            bool exists = connection.Exists<PatientsRow>(
                new Criteria(PatientsRow.Fields.PatientName) == new ValueCriteria(Row.PatientName) &
                new Criteria(PatientsRow.Fields.DateOfBirth) == new ValueCriteria(Row.DateOfBirth)
            );

            if (exists)
            {
                throw new ValidationError("A patient with the same name and date of birth already exists.");
                // throw new ValidationError("DuplicatedEntity", SiteValidationTexts.DuplicatedEntity.ToString(localizer));
            }
        }
    }

}

