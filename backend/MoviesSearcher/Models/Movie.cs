using System;
using System.Collections.Generic;

#nullable disable

namespace MoviesSearcher.Models
{
    public partial class Movie
    {
        public int MovieId { get; set; }
        public string MovieTitle { get; set; }
        public int MovieYear { get; set; }
        public int MovieDuration { get; set; }
        public byte[] Cover { get; set; }
        public string Synopsis { get; set; }
    }
}
