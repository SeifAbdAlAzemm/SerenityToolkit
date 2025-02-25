using Serenity.ComponentModel;

namespace HosbitalSerenity.Default.Forms;

[FormScript("Default.City")]
[BasedOnRow(typeof(CityRow), CheckNames = true)]
public class CityForm
{
    public string CityName { get; set; }
    public int GovId { get; set; }
}