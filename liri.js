//require the .env file
require("dotenv").config();

//requireing the keys.js file
var keys = require("./keys.js");

//access keys information
var spotify = new spotify(keys.spotify);

var command = process.argv[2];