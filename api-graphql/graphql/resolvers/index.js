import { mergeResolvers } from 'merge-graphql-schemas';

import User from './User/';
import Chat from './Chat/';

const resolvers = [User, Chat];

export default mergeResolvers(resolvers);
