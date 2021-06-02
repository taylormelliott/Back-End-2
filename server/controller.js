const movies = require("./db.json");
let globalId = 11;

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies);
  },
  deleteMovie: (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    // console.log(id);
    // console.log(typeof id);
    const index = movies.findIndex((movie) => {
      return movie.id === +id;
    });
    // console.log(index);
    movies.splice(index, 1);
    res.status(200).send(movies);
  },
  createMovie: (req, res) => {
    const { title, rating, imageURL } = req.body;

    const index = movies.findIndex(mo);

    console.log(title, rating, imageURL);
    const newMovie = {
      id: globalId,
      title: title,
      rating: rating,
      imageURL: imageURL,
    };
    movies.push(newMovie);
    res.status(200).send(movies);
    globalId++;
  },
  updateMovie: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    const index = movies.findIndex((movie) => {
      return movie.id === +id;
    });

    const currRating = movies[index].rating;

    if (currRating === 5 && type === "plus") {
      res.status(400).send("no can do");
    } else if (currRating === 0 && type === "minus") {
      res.status(400).send("no can do");
    } else if (type === "plus") {
      movies[index].rating++;
      res.status(200).send(movies);
    }
    console.log(currRating);
    console.log(req.body);
  },
};
