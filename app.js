const { response } = require('express');
const express = require('express'); //
const movieRouter = require("./routes/movie");

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

const logger = (req, res, next) => {
    console.log(`${req.method} received on ${req.url} at ${new Date()}`);
    next(); // Call next function to move to the next middleware. Or Use respnse.send() to end the request. Or throw an error.
};

const anotherLogger = (req, res, next) => {
    console.log(`This log is from another logger`);
    next(); // Call next function to move to the next middleware. Or Use respnse.send() to end the request. Or throw an error.
}

app.use(logger); // MiddleWare
// Call next function to move to the next middleware
app.use(movieRouter); // Express Middlewest


/**
 * @function Call_Back_Function
 * @param req
 * @param res
 */
app.get("/", (req, res) => {
    res.send("Hello World from Devpoojit");
})







//app.listen starts the server

/**
 * @param portNumber
 * @param Call_Back_Function
 */
app.listen(3000, () => { 
    console.log("Server is up and running on port 3000");
});

