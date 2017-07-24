const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const config = require('./.config.js');
const massive = require('massive');

const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.use(bodyParser.json());


//*************************************************
app.get('/developers', function (req, res) {
  res.status(200).send('here are the developers')
  console.log('hereyou go');

})





app.listen(3001, function(){
  console.log('working');
});
