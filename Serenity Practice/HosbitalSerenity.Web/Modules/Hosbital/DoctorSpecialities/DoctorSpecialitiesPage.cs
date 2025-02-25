using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Hosbital.Pages;

[PageAuthorize(typeof(DoctorSpecialitiesRow))]
public class DoctorSpecialitiesPage : Controller
{
    [Route("Hosbital/DoctorSpecialities")]
    public ActionResult Index()
    {
        return this.GridPage<DoctorSpecialitiesRow>("@/Hosbital/DoctorSpecialities/DoctorSpecialitiesPage");
    }
}