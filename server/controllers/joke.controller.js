const Joke = require('../models/joke.model');

//GET /api/jokes
//POST /api/jokes
//GET /api/jokes/:_id
//PUT /api/jokes/:_id
//DELETE /api/jokes/:_id

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "something went wrong", error: err}));
}