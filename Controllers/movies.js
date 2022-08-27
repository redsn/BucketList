//==
// Dependencies
//==

const {MOVIE_URL, MOVIE_KEY} = process.env;
const router = require('express').Router();

//==
// Module Export 
//==

module.exports = router;

//==
// Routes
//==

// SEARCH //

router.get('/:search', async (req,res) => {
    const term = req.params.search;
    const find = `${MOVIE_URL}${MOVIE_KEY}&t=${term}`;
    const response = await fetch(find);
    try{
        const data = await response.json();
        res.status(200).json({data});
    } catch(error){
        console.log(error);
    }
})


