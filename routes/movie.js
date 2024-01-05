const express = require('express');
const router = express.Router();

const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    }
];

router.get("/api/movies/", (req, res) => {
    const searchString = req.query.search;
    console.log({ searchString });
    if (!searchString) {
        return res.send(movies);
    }
    const filteredMovies = movies.filter((m) => {
        return m.title.toLowerCase().includes(searchString.toLowerCase());
    });
    res.send(filteredMovies);
});


/**
 * Get Single Movie
 */
router.get("/api/movies/:id", (req, res) => {
    const id = req.params.id; // req.params."Any Parameter Name" to get the value of the parameter.
    const movie = movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
        res.status(404).send("ID Not Found");
    }
    res.send(movie);
});

router.post("/api/movies", (req, res) => {
    const movie = req.body;
    movie.id = movies.length + 1;
    movies.push(movie);
    res.send(movie);
});

/**
 * Not Scalable
 */ 
// app.get("/api/movies/1", (req, res) => {
//     res.send(movies[0]);
// })
// app.get("/api/movies/2", (req, res) => {
//     res.send(movies[1]);
// })


router.put("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id));
    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.rating = req.body.rating;
    movie.actors = req.body.actors;
    res.send(movie);
});

router.delete("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id));
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie);

});

module.exports = router;