import mongodb from 'mongodb';
// The Chat schema.
import Chat from '../../../models/Chat';
import { createSlug } from '../../../utils/createToken';

export default {
  Query: {
    chat: (root, args) => {
      return new Promise((resolve, reject) => {
        Chat.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    chats: () => {
      return new Promise((resolve, reject) => {
        Chat.find({})
          .sort({ creationDate: -1 })
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addChat: (root, { userId, name, description, tags }) => {
      return new Promise((resolve, reject) => {
        const newChat = new Chat({
          _id: new mongodb.ObjectId(),
          name,
          description,
          tags,
          userId,
          slug: createSlug(name)
        });
        newChat.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
    
    /*   editUser: (root, { id, name, email }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ id }, { $set: { name, email } }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteChat: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    } */
  }
};
