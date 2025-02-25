using Serenity.ComponentModel;

namespace HosbitalSerenity.Hosbital.Forms;

[FormScript("Hosbital.DoctorSpecialities")]
[BasedOnRow(typeof(DoctorSpecialitiesRow), CheckNames = true)]
public class DoctorSpecialitiesForm
{
    public int DoctorId { get; set; }
    public int SpecialityId { get; set; }
}