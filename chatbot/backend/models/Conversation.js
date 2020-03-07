const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    conversation: Array,
});

module.exports = mongoose.model('Conversation', ConversationSchema);
