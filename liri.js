//require files:
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");

//access keys information
var spotify = new spotify(keys.spotify);

//take in user command
var command = process.argv[2];

//Bands int Town Artist Events API
var artist = process.argv[3];
var bands = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//OMDB API
var movies = "http://www.omdbapi.com/?apikey=trilogy&"