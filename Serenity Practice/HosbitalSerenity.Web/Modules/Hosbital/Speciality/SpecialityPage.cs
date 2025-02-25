using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Hosbital.Pages;

[PageAuthorize(typeof(SpecialityRow))]
public class SpecialityPage : Controller
{
    [Route("Hosbital/Speciality")]
    public ActionResult Index()
    {
        return this.GridPage<SpecialityRow>("@/Hosbital/Speciality/SpecialityPage");
    }
}