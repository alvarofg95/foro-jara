import mongodb from 'mongodb';
// The User schema.
import User from '../../../models/User';
import encryptPassword from '../../../utils/encryptPassword';
import ERRORS from '../../../utils/errors';
import createToken from '../../../utils/createToken';

export default {
  Query: {
    user: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    login: (root, { nick, password }) => {
      const hashedPassword = encryptPassword(password);
      return new Promise((resolve, reject) => {
        User.findOne({ nick, password: hashedPassword }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addUser: (root, { nick, email, password }) => {
      return new Promise((resolve, reject) => {
        const hashedPassword = encryptPassword(password);
        const newUser = new User({
          _id: new mongodb.ObjectId(),
          nick,
          email,
          password: hashedPassword
        });
        newUser.save((err, res) => {
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
    },
    editUser: (root, { id, name, email }) => {
      return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ id }, { $set: { name, email } }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
