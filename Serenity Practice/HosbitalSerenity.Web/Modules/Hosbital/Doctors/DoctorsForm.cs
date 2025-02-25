using Serenity.ComponentModel;

namespace HosbitalSerenity.Hosbital.Forms;

[FormScript("Hosbital.Doctors")]
[BasedOnRow(typeof(DoctorsRow), CheckNames = true)]
public class DoctorsForm
{
    [Tab("Doctors")]
    public string DoctorName { get; set; }
    //public int SpecialityId { get; set; }
    public List<int> SpecialityList { get; set; }
    public string ProfilePicture { get; set; }
    public string Documents { get; set; }

    [Tab("Patients"), IgnoreName, DoctorPatientGrid, LabelWidth("0")]
    public string PatientsGrid { get; set; }
}