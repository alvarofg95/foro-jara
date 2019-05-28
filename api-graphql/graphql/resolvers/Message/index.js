import mongodb from 'mongodb';
// The User schema.
import Message from '../../../models/Message';
import { encryptPassword, comparePassword } from '../../../utils/encryptPassword';
import ERRORS from '../../../utils/errors';
import { createToken } from '../../../utils/createToken';

export default {
  Query: {},
  Mutation: {
    addMessage: (root, { userId, nick, text }) => {
      return new Promise((resolve, reject) => {
        if (!userId || !nick || !text) {
          reject(new Error('No he recibido todos los datos necesarios'));
        }
        const newMessage = new Message({
          _id: new mongodb.ObjectId(),
          nick,
          userId,
          text
        });
        newMessage.save((err, res) => {
          if (err && err.code === 11000) {
            reject(new Error(ERRORS.argsRegistered));
          }
          err
            ? reject(err)
            : resolve({
                _id: res._id,
                role: res.role,
                nick: res.nick,
                email: res.email,
                token: createToken(newUser)
              });
        });
      });
    }
  }
};
