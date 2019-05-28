const CHAT_QUERY = `query chat($slug: String!) {
  chat(slug: $slug) {
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

export default CHAT_QUERY;
