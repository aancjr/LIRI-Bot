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
var artist = process.argv[3];
var bands = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//OMDB API
var movies = "http://www.omdbapi.com/?apikey=trilogy&"

//node liri.js concert-this <artist/band name here>
    //NEED:
        //Name of Venue
        //venue location
        //date of the event (using moment to format as "MM/DD/YYYY")

if (command == "concert-this") {
    axios.get(bands).then(function(response){
        console.log(response.data)
        console.log("It works!")
    })
}