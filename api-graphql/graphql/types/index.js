import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';
import Chat from './Chat/';

const typeDefs = [User, Chat];

export default mergeTypes(typeDefs, { all: true });
