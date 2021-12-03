const express = require('express')
const router = express.Router()
const controllers = require('../controllers.js/messages');


// Retrieves all messages in DB, renders on homepage (via controller funct.)
router.get('/', controllers.getAllMessages);


// Adds new message to DB (via controller funct.)
router.post('/messages/add', controllers.postNewMessage);


// Retrieves a single message, renders unique message details page
// deletes message in DB after render (via controller funct.)
router.get('/messages/detail/:message_id', controllers.getSingleMessage);


module.exports = router
