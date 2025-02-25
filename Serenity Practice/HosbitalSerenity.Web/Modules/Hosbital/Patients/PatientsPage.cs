using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Hosbital.Pages;

[PageAuthorize(typeof(PatientsRow))]
public class PatientsPage : Controller
{
    [Route("Hosbital/Patients")]
    public ActionResult Index()
    {
        return this.GridPage<PatientsRow>("@/Hosbital/Patients/PatientsPage");
    }
}