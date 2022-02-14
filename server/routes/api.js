//const Movie = require('../models/movie');

const express = require('express');
const router = express.Router();

//Trying MongoDB Atlas method
var axios = require('axios');

const API_KEY = 'uSB5a78O7R0Z37cM97tjMQL51aZ2Dv8a1lQgBrjnQ6xetxS1B2yd7TKOaa5vPCiW';

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-ngnsu/endpoint/data/beta/action/find',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': API_KEY
    },
    data: ''
};

router.get('/movies', function (_req, res) {
    config.data = JSON.stringify({
        "collection": "movies",
        "database": "IMDb-Watchlist",
        "dataSource": "Cluster0"
    });
    axios(config)
        .then(function (response) {
            res.json(response.data.documents);
        })
        .catch(function (error) {
            console.log(error);
        });
});

router.get('/movies/:id', function (_req, res) {
    config.data = JSON.stringify({
        "collection": "movies",
        "database": "IMDb-Watchlist",
        "dataSource": "Cluster0",
        "filter": {
            "_id": { '$oid': _req.params.id.toString() }
        }
    });
    axios(config)
        .then(function (response) {
            res.json(response.data.documents);
            console.log(_req.params.id);
        })
        .catch(function (error) {
            console.log(error);
        });
});

module.exports = router;