import mongodb from 'mongodb';
// The Chat schema.
import Chat from '../../../models/Chat';

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
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addChat: (root, { userId, name, description, tags }) => {
      console.log({ addChat: { name, description, tags, userId } });
      return new Promise((resolve, reject) => {
        const newChat = new Chat({
          _id: new mongodb.ObjectId(),
          name,
          description,
          tags,
          userId
        });
        console.log({ newChat });
        newChat.save((err, res) => {
          console.log({ err, res });
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
