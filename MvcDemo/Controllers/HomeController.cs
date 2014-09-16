using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace MvcDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var viewModel = new MessageViewModel();

            return View(viewModel);
        }

        [HttpPost]
        public JsonResult SendMessage(MessageViewModel viewModel)
        {
            // the logic goes here
            return Json(new { isSuccess = true });
        }

        public class MessageViewModel
        {
            [Required]
            public string Name { get; set; }

            [Required]
            public string Email { get; set; }

            public string Subject { get; set; }

            [Required]
            public string Message { get; set; }
        }
    }
}