using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<HosbitalSerenity.Administration.LanguageRow>;
using MyRow = HosbitalSerenity.Administration.LanguageRow;


namespace HosbitalSerenity.Administration;
public interface ILanguageListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class LanguageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageListHandler
{
    public LanguageListHandler(IRequestContext context)
         : base(context)
    {
    }
}