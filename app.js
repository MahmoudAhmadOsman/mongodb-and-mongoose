const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Bring the model into app.js file
const Post = require('./Model/Post.model');

//Acquire mongodb database
const db = 'mongodb://localhost/mymongodb';
mongoose.connect(db);



// use body parser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));


const port = 9090;

app.get('/', function(req, res) {
	res.send('<h3>App is running!</h3>');
});


//Create another Route for posts

app.get('/posts', function(req, res) {
  console.log('All posts');
  Post.find({})
    .exec(function(err, posts) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(posts);
        res.json(posts);
      }
    });
});





app.listen(port, function (){
 	 console.log(`Listening on port ${port}!`);
});