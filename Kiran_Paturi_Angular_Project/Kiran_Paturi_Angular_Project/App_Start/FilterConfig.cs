using System.Web;
using System.Web.Mvc;

namespace Kiran_Paturi_Angular_Project
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}