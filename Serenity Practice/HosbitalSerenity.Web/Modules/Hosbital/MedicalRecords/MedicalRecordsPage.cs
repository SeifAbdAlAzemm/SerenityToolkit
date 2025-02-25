using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace HosbitalSerenity.Hosbital.Pages;

[PageAuthorize(typeof(MedicalRecordsRow))]
public class MedicalRecordsPage : Controller
{
    [Route("Hosbital/MedicalRecords")]
    public ActionResult Index()
    {
        return this.GridPage<MedicalRecordsRow>("@/Hosbital/MedicalRecords/MedicalRecordsPage");
    }
}