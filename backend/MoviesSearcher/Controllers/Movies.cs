using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesSearcher.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using MoviesSearcher.Models.Response;

namespace MoviesSearcher.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class Movies : ControllerBase
    {
        private readonly MoviesContext context;

        /// <summary>
        /// Entity framework context dependency injection 
        /// </summary>
        /// <param name="context">Entity framework context</param>
        public Movies(MoviesContext context)
        {
            this.context = context;
        }

        /// <summary>
        /// Performs a movie search according to a search filter
        /// </summary>
        /// <param name="search">Movie search filter</param>
        /// <returns>Response status code and a list of movies</returns>
        [HttpGet]
        public IActionResult Get(string search)
        {
            Response response = new();
            
            try
            {
                //default search filter
                if (search == "all")
                {
                    //select the 100 most recent movies by year
                    List<MovieResponse> movies = new();
                    movies = (from m in context.Movies
                              orderby m.MovieYear descending
                              select new MovieResponse
                              {
                                  Id = m.MovieId,
                                  Title = m.MovieTitle,
                                  Cover = Convert.ToBase64String(m.Cover),
                                  Synopsis = m.Synopsis,
                                  Year = m.MovieYear
                              }).Take(100).ToList();

                    if (movies.Any())
                    {
                        //returns all the actors and genres in a movie
                        foreach (var item in movies)
                        {
                            item.Starring = string.Join(", ", context.ActorMovies
                                                  .Where(id => id.MovieId == item.Id)
                                                  .Select(actor => actor.Actor.Name));
                            item.Genres = string.Join(", ", context.MovieGenres
                                                .Where(id => id.MovieId == item.Id)
                                                .Select(genre => genre.Genre.Title));                    
                        }
                      
                        response.Data = movies;
                    }
                }
                else
                {
                    //select best matches according to the search filter
                    List<MovieResponse> list = null;
                    list = (from m in context.Movies
                            join am in context.ActorMovies on m.MovieId equals am.MovieId
                            join mg in context.MovieGenres on m.MovieId equals mg.MovieId
                            join g in context.Genres on mg.GenreId equals g.GenreId
                            join a in context.Actors on am.ActorId equals a.ActorId
                            where m.MovieTitle.Contains(search) || 
                                  a.Name.Contains(search) ||
                                  g.Title.Contains(search)
                            orderby m.MovieId
                            select new MovieResponse
                            {
                                Id = m.MovieId,
                                Title = m.MovieTitle,
                                Cover = Convert.ToBase64String(m.Cover),
                                Synopsis = m.Synopsis,
                                Year = m.MovieYear
                            }).ToList();

                    if (list.Any())
                    {
                        var ids = list.Select(x => x.Id).Distinct().Take(100);
                        List<MovieResponse> movies = new();

                        //returns all the actors and genres in a movie
                        foreach (var id in ids)
                        {
                            var element = list.Where(x => x.Id == id).ToList();
                            
                            movies.Add(new MovieResponse
                            {
                                Id = id,
                                Title = element.Select(g => g.Title).First(),
                                Starring = string.Join(", ", context.ActorMovies
                                                 .Where(i => i.MovieId == id)
                                                 .Select(actor => actor.Actor.Name)),
                                Genres = string.Join(", ", context.MovieGenres
                                               .Where(i => i.MovieId == id)
                                               .Select(genre => genre.Genre.Title)),
                                Synopsis = element.Select(s => s.Synopsis).First(),
                                Cover = element.Select(c => c.Cover).FirstOrDefault()
                            });
                        }

                        response.Data = movies;
                    }
                }
            }
            catch (Exception e)
            {
                response.Data = null;
                response.Success = false;
                response.Message = e.Message;
            }

            return Ok(response);
        }

        public class Movie
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
}
