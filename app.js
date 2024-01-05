const { response } = require('express');
const express = require('express'); //

const app = express(); //Contructor of express --> Creates an instance of express called app
app.use(express.json()); // Express Middlewest


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


/**
 * @function Call_Back_Function
 * @param req
 * @param res
 */
app.get("/", (req, res) => {
    res.send("Hello World from Devpoojit");
})

app.get("/api/movies/", (req, res) => {
    res.send(movies);
})

/**
 * Get Single Movie
 */
app.get("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
        res.status(404).send("ID Not Found");
    }
    res.send(movie);
});

app.post("/api/movies", (req, res) => {
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


app.put("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id));
    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.rating = req.body.rating;
    movie.actors = req.body.actors;
    res.send(movie);
});

app.delete("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find((movie) => movie.id === parseInt(id));
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie);

});





//app.listen starts the server

/**
 * @param portNumber
 * @param Call_Back_Function
 */
app.listen(3000, () => { 
    console.log("Server is up and running on port 3000");
});

