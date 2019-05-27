const CHATS_QUERY = `query chats {
  chats {
    _id
    name
    description
    numUsers
    numMessages
    creationDate
    creationDateString
  }
}`;

export default CHATS_QUERY;
