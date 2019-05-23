const LOGIN_QUERY = `query login($nick: String!, $password: String!) {
  login(nick: $nick, password: $password) {
    token
    email
  }
}`;

export default LOGIN_QUERY;
