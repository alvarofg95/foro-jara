import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the User Schema.
const fecha = new Date();
const ChatSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String
    }
  ],
  messages: [
    {
      type: String
    }
  ],
  numUsers: {
    type: Number,
    default: 1
  },
  numMessages: {
    type: Number,
    default: 0
  },
  creationDate: {
    type: Date,
    default: fecha
  },
  creationDateString: {
    type: String,
    default: fecha.toLocaleDateString('es')
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
