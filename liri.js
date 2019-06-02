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

//Bands in Town Artist Events API
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


// if (command == "movie-this") {
//     axios.get(movies).then(function(response) {
//         console.log("Movie Title: " + response.data.Title);
//         console.log("Movie Year: " + response.data.Year);
//         console.log("IMDB Rating: " + response.data.imdbRating);
//         console.log("Rotten Tomatoes:" + response.data.Ratings[2]);
//         console.log("Movie Country: " + response.data.Country);
//         console.log("Movie Language: " + response.data.Language);
//         console.log("Plot: " + response.data.Plot);
//         console.log("Actors: " + response.data.Actors);
//     })


// node liri.js spotify-this-song '<song name here>'
    //NEED:
        //Artist(s), song's name, preview link of the song from Spotify, album.
            //*If no song provided, default to "The Sign" by Ace of Base.
  if (command == "spotify-this-song") {
    spotify.search({ type: 'track', query: parameter})
    .then(function(data) {
        console.log("--------------");
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name)
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Spotify Song Preview: " + data.tracks.items[0].preview_url);
        console.log("Album Title: " + data.tracks.items[0].album.name);
        console.log("--------------");
    })
//   .catch(function(err) {
//     spotify.search({ type: 'track', query: 'The Sign', limit: 40 })
//     .then(function(data) {
//             console.log(data.tracks)
// //         console.log("--------------");
//         // console.log("Song Name: " + data.albums.items[1].artists[0]);
// //         console.log("Spotify Song Preview: " + data.tracks.items[0].album.external_urls.spotify);
// //         console.log("Album Title: " + data.tracks.items[0].album.name);
// //         console.log("--------------");
//     }) 
//   });
}


