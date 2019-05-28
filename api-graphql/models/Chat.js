import mongoose from 'mongoose';
import User from '../graphql/types/User';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  nick: {
    type: String,
    required: true
  }
});

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
  slug: {
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
      type: messageSchema
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
