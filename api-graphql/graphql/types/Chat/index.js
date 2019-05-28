export default `
  scalar Date

  type BasicUser {
    userId: String!
    nick: String!
  }

  type Message {
    text: String!
    user: BasicUser
  }

  type Chat {
    _id: String!
    userId: String!
    name: String!
    description: String!
    tags: [String]
    numUsers: Int
    numMessages: Int
    creationDate: Date
    creationDateString: String
    slug: String
  }

  type Query {
    chat(slug: String!): Chat
    chats: [Chat]
  }

  type Mutation {
    addChat(userId: String!, name: String!, description: String!, tags: [String]): Chat
  }
`;
