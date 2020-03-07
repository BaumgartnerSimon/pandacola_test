// SERVER

var express = require('express');
var async = require('async');
var mainRoute = require('./routes/routes.js');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var postConv = require('./routes/api/postConv')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

async.retry(
    {times: 1000, interval: 1000},
    function(callback) {
        mongoose.connect('mongodb://admin:admin@db:27017/pandacola_test', function(err, client, done) {
            callback(err, client);
        });
    },
    function(err, client) {
        if (err)
            return console.error("Retry cancelled");
        console.log("Successfully connected to db");
    }
);

app.use('/', mainRoute);
app.use('/', postConv);

module.exports=app;
