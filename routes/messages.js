var express = require('express')
var router = express.Router()
let Message = require('../models/messages');


// Retrieves all messages in DB, renders on homepage
router.get('/', (req, res) => {
  Message.find({}, function(err, messages) {
    if (err) {
      console.log(err);
    } else {
      res.render('messages/index', {
        messages: messages
      });
    }
  });
});


// Adds new message to DB 
router.post('/messages/add', (req, res) => {
  let msg = new Message();
  msg.subject = req.body.subject;
  msg.body = req.body.body;
  
  msg.save((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/')
    }
  });


// Retrieves a single message, routes User to view page with message diplayed
// deletes message in DB after routing
router.get('/messages/', (req, res) => {
  
});

});

module.exports = router
