using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using TenthWork.Models;

namespace TenthWork.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            return View("MyView");
        }
        [HttpGet]
        public ViewResult RsvpForm()
        {
            return View("Cryptography");
        }
        


    }
}
