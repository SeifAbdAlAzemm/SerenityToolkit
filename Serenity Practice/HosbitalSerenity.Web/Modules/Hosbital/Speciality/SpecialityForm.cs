using Serenity.ComponentModel;

namespace HosbitalSerenity.Hosbital.Forms;

[FormScript("Hosbital.Speciality")]
[BasedOnRow(typeof(SpecialityRow), CheckNames = true)]
public class SpecialityForm
{
    public string SpecialityName { get; set; }
}