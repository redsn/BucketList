//==
// Dependencies
//==

const {MOVIE_URL, MOVIE_KEY} = process.env;
const router = require('express').Router();
const mongoose = require('mongoose');
const Movie = require('../Models/movie');

//==
// Module Export 
//==

module.exports = router;

//==
// Functions
//==

// Checks to see if title exists in MongoDB to avoid using API
const listCheck = (check) => {
    const result = Movie.find({Title: check});
    result();
    console.log('On try for mongoose');
    if(result) {return true}
    else { console.log('Failed Mongoose attempt')}
};

const listAdd = (val) => {
    Movie.create({

    // Standard Data from API
    Actors:val.Actors,
    Awards:val.Awards,
    BoxOffice:val.BoxOffice,
    Country:val.Country,
    DVD:val.DVD,
    Director:val.Director,
    Genre: val.Genre,
    Language: val.Language,
    Metascore:val.Metascore,
    Plot:val.Plot,
    Poster:val.Poster,
    Production:val.Production,
    Rated: val.Rated,
    Ratings: val.Ratings,
    Released:val.Released,
    Response: val.Response,
    Runtime: val.Runtime,
    Title: val.Title,
    Type: val.Type,
    Website: val.Website,
    Writer: val.Writer,
    Year: val.Year,
    imdbID: val.imdbID,
    imdbRating: val.imdbRating,
    imdbVotes: val.imdbVotes
    })
}

// Consider using try/catch to do search

//==
// Routes
//==

// SEARCH //

/// WORKING Backup
// router.get('/:search', async (req,res) => {
    
//     const term = req.params.search;
//     const find = `${MOVIE_URL}${MOVIE_KEY}&t=${term}`;
//     const response = await fetch(find);
//     try{
//         const data = await response.json();
//         res.status(200).json({data});
//     } catch(error){
//         console.log(error);
//     }
// });

// TEST//
router.get('/:search', async (req,res) => {

    const mongooseResult = Movie.find({Title: req.params.search});

    // if(Movie.find({Title: req.params.search})){
    //     console.log('found?');
    //     console.log(mongooseResult);
    //     // console.log(test.json());
    //     res.status(200).json(await mongooseResult);
    // }  else {
    //     return console.log('????')
    // }

    Movie.find({Title: req.params.search}, async function (err, result) {
        if(err){
            return 'An Error has occured...'
        } else if(result.length > 0) {
            res.status(200).json(await mongooseResult);
        } else {
            const term = req.params.search;
            const find = `${MOVIE_URL}${MOVIE_KEY}&t=${term}`;
            const response = await fetch(find);
            try {
                const data = await response.json();
                listAdd(data);
                res.status(200).json({data});
            } catch (error) {
                
            }
        }
    })
    // res.status(200).json(await Movie.find({Title: req.params.search}));
    
    // try {
    //     console.log('test for try');
    //     listCheck(req.params.search);
    //     console.log('Displayed With Mongoose Connection');
    //     res.status(200).json(await Movie.find({Title: req.params.search}));
    // } catch (error) {
    //     const term = req.params.search;
    //     const find = `${MOVIE_URL}${MOVIE_KEY}&t=${term}`;
    //     const response = await fetch(find);
    //     console.log('Displayed with API connection');
    //     try{
    //         const data = await response.json();
    //         listAdd(data);
    //         res.status(200).json({data});
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

})

