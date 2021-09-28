using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesSearcher.Models.Response
{
    public class MovieResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Genres { get; set; }
        public string Starring { get; set; }
        public string Synopsis { get; set; }
        public string Cover { get; set; }
    }
}
