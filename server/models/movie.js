const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    _id: String,
    Const: String,
    Created: String,
    Modified: String,
    Description: String,
    Title: String,
    URL: String,
    TitleType: String,
    IMDbRating: Number,
    Runtime: Number,
    Year: Number,
    Genres: String,
    NumVotes: Number,
    ReleaseDate: String,
    Directors: String,
    YourRating: String,
    DateRated: String,
    Poster: String
});

module.exports = mongoose.model('movie', movieSchema, 'movies');