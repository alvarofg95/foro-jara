import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the Message Schema.
const fecha = new Date();
const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  userNick: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: fecha
  },
  creationDateString: {
    type: Date,
    default: fecha.toLocaleDateString('es')
  }
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
