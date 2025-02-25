using Serenity.ComponentModel;

namespace HosbitalSerenity.Default.Forms;

[FormScript("Default.Governorate")]
[BasedOnRow(typeof(GovernorateRow), CheckNames = true)]
public class GovernorateForm
{
    public string GovName { get; set; }
}