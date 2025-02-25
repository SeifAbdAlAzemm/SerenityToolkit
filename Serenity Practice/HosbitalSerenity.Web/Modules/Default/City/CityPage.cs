using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Default.Pages;

[PageAuthorize(typeof(CityRow))]
public class CityPage : Controller
{
    [Route("Default/City")]
    public ActionResult Index()
    {
        return this.GridPage<CityRow>("@/Default/City/CityPage");
    }
}