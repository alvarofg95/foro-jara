const CHATS_QUERY = `query chats {
  chats {
    _id
    slug
    name
    description
    numUsers
    numMessages
    creationDate
    creationDateString
  }
}`;

export default CHATS_QUERY;
