const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const messagesRoute = require('./routes/messages');


// MongoDB database setup and error Handling
mongoose.connect('mongodb://localhost/tmwsd');

let db = mongoose.connection;

db.once('open', function() {
  console.log('Connected to MongoDB');
})

db.on('error', function(err) {
  console.log(err);
});


// Body Parsing middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Tell Express to use routes + controllers brought in at top of file 
app.use('/', messagesRoute)


// Set view engine to use Pug
app.set('view engine', 'pug')


// Initialize Express server on local port
app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
