using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Default.Pages;

[PageAuthorize(typeof(GovernorateRow))]
public class GovernoratePage : Controller
{
    [Route("Default/Governorate")]
    public ActionResult Index()
    {
        return this.GridPage<GovernorateRow>("@/Default/Governorate/GovernoratePage");
    }
}