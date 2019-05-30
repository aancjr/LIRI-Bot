//require files:
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

//access keys information
var spotify = new Spotify(keys.spotify);

//take in user command
var command = process.argv[2];

//Bands int Town Artist Events API
   // possibly declare artist in if statement?
var parameter = process.argv[3];
var bands = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp"

//OMDB API
var movies = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy&"

//node liri.js concert-this <artist/band name here>
    //NEED:
        //Name of Venue
        //venue location
        //date of the event (using moment to format as "MM/DD/YYYY")

// if (command == "concert-this") {
//     axios.get(bands).then(function(response){
//         console.log(response.data)
//     })
// } 


// node liri.js movie-this <movie name here>
    //NEED:
        // Title of movie, Year, IMDB Rating, Rotten Tomatoes Rating, Country Producted, language, Plot, Actors
if (command == "movie-this") {
    axios.get(movies).then(function(response) {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.imdbRating);
        console.log(response.data.Ratings[2]);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);

        console.log("itworks!")
    })
}