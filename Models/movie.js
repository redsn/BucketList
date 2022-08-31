const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newListitem = new Schema({

    // Standard Data from API
    Actors: {type: String},
    Awards: {type: String},
    BoxOffice: {type: String},
    Country: {type: String},
    DVD: {type: String},
    Director: {type: String},
    Genre: { type: String },
    Language: { type: String },
    Metascore: { type: String },
    Plot: {type: String},
    Poster: {type: String},
    Production: {type: String},
    Rated: { type: String },
    Ratings: { type: Array },
    Released: { type: String },
    Response: { type: String}, 
    Runtime: { type: String },
    Title: { type: String },
    Type: { type: String },
    Website: { type: String },
    Writer: { type: String },
    Year: { type: String },
    imdbID: { type: String },
    imdbRating: { type: String },
    imdbVotes: { type: String},
    // Supplement APP data
    onList: {type: Array}, // Array of user IDs
    complete: {type: Array } // Array of number complete. Display complete //over// onList.length


}, {timestamps: true});

module.exports = mongoose.model('listitem', newListitem);


    /* Temp housing for formating

    {§Title: 'Batman', §Year: '1989', §Rated: 'PG-13', §Released: '23 Jun 1989', §Runtime: '126 min', …}
§Actors: "Michael Keaton, Jack Nicholson, Kim Basinger"
§Awards: "Won 1 Oscar. 9 wins & 26 nominations total"
§BoxOffice: "$251,409,241"
§Country: "United States, United Kingdom"
§DVD: "22 Aug 1997"
§Director: "Tim Burton"
§Genre: "Action, Adventure"
§Language: "English, French, Spanish"
§Metascore: "69"
Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
§Poster: "https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg"
§Production: "N/A"
§Rated: "PG-13"
§Ratings: (3) [{…}, {…}, {…}]
§Released: "23 Jun 1989"
Response: "True"
§Runtime: "126 min"
§Title: "Batman"
§Type: "movie"
Website: "N/A"
§Writer: "Bob Kane, Sam Hamm, Warren Skaaren"
§Year: "1989"
§imdbID: "tt0096895"
§imdbRating: "7.5"
§imdbVotes: "373,505"


    */