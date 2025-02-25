using MyRequest = Serenity.Services.SaveRequest<HosbitalSerenity.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = HosbitalSerenity.Administration.LanguageRow;


namespace HosbitalSerenity.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}