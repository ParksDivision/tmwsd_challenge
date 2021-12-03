const Message = require('../models/messages');


// Retrieves all messages in DB, renders on homepage
getAllMessages = async (req, res) => {
  try {
    let messages = await Message.find({});
      res.render('messages/index', {
        messages: messages
      });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}


// Adds new message to DB 
postNewMessage = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}


// Retrieves a single message, renders unique message details page
// deletes message in DB after render
getSingleMessage = async (req, res) => {
  try {
    let id = req.params.message_id;
    let message = await Message.findOneAndDelete({_id: id});

    res.render('messages/detail', {
      message: message
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}


module.exports = { 
  getAllMessages,
  postNewMessage,
  getSingleMessage 
}