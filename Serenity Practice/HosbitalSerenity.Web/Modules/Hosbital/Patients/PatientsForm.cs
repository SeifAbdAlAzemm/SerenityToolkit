using HosbitalSerenity.Modules.Hosbital.Patients;

namespace HosbitalSerenity.Hosbital.Forms;

[FormScript("Hosbital.Patients")]
[BasedOnRow(typeof(PatientsRow), CheckNames = true)]
public class PatientsForm
{
    public string PatientName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public Gender Gender { get; set; }

    [Hidden]
    public string Address { get; set; }
    public int govId { get; set; }
    public int cityId { get; set; }
    public int Cost { get; set; }
    public int LoyalityYears { get; set; }

    [ReadOnly(true)]
    public int TotalCost { get; set; }

}