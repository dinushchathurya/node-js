var express = require ('express');

var app = express();

app.get ('/', function (req ,res){
    res.send('This is Home Page');
});

app.get('/contact', function (req ,res){
    res.send('This is Contact Page');
});

app.get('/profile/:id', function(req ,res){
    res.send('You requested to visit the profile with the id of ' + req.params.id);
});

app.get('/profile/:name', function (req, res) {
    res.send('You requested to visit the profile with the name of ' + req.params.name);
});

app.listen (3000);
