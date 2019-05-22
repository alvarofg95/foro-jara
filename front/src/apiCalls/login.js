const login = async (nick, password) => {
  const result = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nick,
      password
    })
  });
  console.log({ result });
  const res = await result.json();
  console.log({ res });
};

export default login;
