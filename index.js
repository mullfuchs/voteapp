var express = require('express');
var path = require('path');
var app = express();
var db = require("./models");

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  db.vote.find({
    where: {id: 0}
  }).then(function(voteOBJ) {
    console.log(voteOBJ.dataValues);
    res.render('index', {data: voteOBJ});
  });
  
});

app.get('/voteMan', function(req, res){
  db.vote.find({
    where: {id: 0}
  }).then(function(voteOBJ){
    var voteTotal = voteOBJ.mVote + 1;
    voteOBJ.updateAttributes({
      mVote: voteTotal
    }).then(function(){
      res.render('index', {data: voteOBJ}); 
    })  
  });
});


app.get('/voteWoman', function(req, res){
  db.vote.find({
    where: {id: 0}
  }).then(function(voteOBJ){
    var voteTotal = voteOBJ.fVote + 1;
    voteOBJ.updateAttributes({
      fVote: voteTotal
    }).then(function(){
      res.render('index', {data: voteOBJ}); 
    })  
  });
});

app.listen(process.env.PORT || 3000);