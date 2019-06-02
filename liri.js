//require files:
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require("moment");

//access keys information
var spotify = new Spotify(keys.spotify);

//take in user command
var command = process.argv[2];
var parameter = process.argv[3];

//Bands in Town Artist Events API
// possibly declare artist in if statement?
var bands = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp"

//OMDB API
var movies = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy&"
var movieErr = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy&"

var concertThis = function () {
    if (command == "concert-this") {
        axios.get(bands).then(function (response) {

            // console.log(response.data)
            for (var i = 0; i < 5; i++) {
                console.log("-------------");
                console.log("Name of Venue: " + response.data[i].venue.name);
                console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log("Date of Event: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                console.log("-------------");
            }
        }).catch(function() {
            console.log("CHECK YOUR SPELLING!");
        })
    }
}

var movieThis = function () {
    if (command == "movie-this") {
        axios.get(movies).then(function (response) {
            console.log("\n");
            console.log("Movie Title: " + response.data.Title);
            console.log("Movie Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes:" + response.data.Ratings[1]);
            console.log("Movie Country: " + response.data.Country);
            console.log("Movie Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("\n");
        }).catch(function () {
            axios.get(movieErr).then(function (response) {
                console.log("\n");
                console.log("Movie Title: " + response.data.Title);
                console.log("Movie Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes:" + response.data.Ratings[1]);
                console.log("Movie Country: " + response.data.Country);
                console.log("Movie Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("\n");
            })
        })
    }
}

var spotifyThis = function (command, parameter) {
    if (command == "spotify-this-song") {
        spotify.search({ type: 'track', query: parameter })
            .then(function (data) {
                for (var i = 0; i < 5; i++) {
                    console.log("\n");
                    console.log("Artist(s): " + data.tracks.items[i].artists[0].name);
                    console.log("Song Name: " + data.tracks.items[i].name);
                    console.log("Spotify Song Preview: " + data.tracks.items[i].preview_url);
                    console.log("Album Title: " + data.tracks.items[i].album.name);
                    console.log("---------------")
                }
            })
            .catch(function () {
                spotify.search({ type: 'track', query: 'The Sign' }).then(function (data) {
                    console.log("--------------");
                    console.log("Artist(s): " + data.tracks.items[6].artists[0].name);
                    console.log("Song Name: " + data.tracks.items[6].name);
                    console.log("Spotify Song Preview: " + data.tracks.items[6].preview_url);
                    console.log("Album Title: " + data.tracks.items[6].album.name);
                    console.log("--------------");
                })
            });
    }

}

var doWhatItSays = function () {
    if (command == "do-what-it-says") {
        fs.readFile("random.txt", "utf-8", function (err, data) {
            if (err) {
                return console.log(err);
            }

            var dataArr = data.split(",");

            spotifyThis(dataArr[0], dataArr[1])

        })
    }
}

spotifyThis(command, parameter);
movieThis();
concertThis();
doWhatItSays();