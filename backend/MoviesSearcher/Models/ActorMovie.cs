using System;
using System.Collections.Generic;

#nullable disable

namespace MoviesSearcher.Models
{
    public partial class ActorMovie
    {
        public int ActorId { get; set; }
        public int MovieId { get; set; }
        public string Character { get; set; }

        public virtual Actor Actor { get; set; }
        public virtual Movie Movie { get; set; }
    }
}
