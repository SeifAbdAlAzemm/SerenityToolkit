using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Hosbital.Pages;

[PageAuthorize(typeof(DoctorsRow))]
public class DoctorsPage : Controller
{
    [Route("Hosbital/Doctors")]
    public ActionResult Index()
    {
        return this.GridPage<DoctorsRow>("@/Hosbital/Doctors/DoctorsPage");
    }
}