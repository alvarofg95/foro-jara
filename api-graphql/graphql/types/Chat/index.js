export default `
  type Chat {
    _id: String!
    userId: String!
    name: String!
    description: String!
    tags: [String]
    messages: [String]
    numUsers: Int
    numMessages: Int
    creationDateString: String
  }

  type Query {
    chat(_id: String!): Chat
    chats: [Chat]
  }

  type Mutation {
    addChat(userId: String!, name: String!, description: String!, tags: [String]): Chat
  }
`;
