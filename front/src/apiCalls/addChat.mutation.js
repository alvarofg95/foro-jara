const ADD_CHAT_MUTATION = `mutation addChat($userId: String!, $name: String!, $description: String!, $tags: [String]) {
    addChat(userId: $userId, name: $name, description: $description, tags: $tags) {
      _id
      userId
      name
      description
      tags
      messages
      numUsers
      numMessages
      creationDateString
    }
  }
  `;

export default ADD_CHAT_MUTATION;
