import jwt from 'jwt-simple';
import moment from 'moment';
import dotenv from 'dotenv';
dotenv.config();

const createToken = user => {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(14, 'days')
      .unix()
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET || 'develop');
};

export default createToken;
