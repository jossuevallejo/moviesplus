using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesSearcher.Models.Response
{
    public class Response
    {
        public bool Success { get; set; }
        public string Message{ get; set; }
        public object Data{ get; set; }
    }
}
