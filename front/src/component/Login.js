import React, { Component } from 'react';
import login from '../apiCalls/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.nick = React.createRef();
    this.password = React.createRef();

    this.userLogin = this.userLogin.bind(this);
  }

  userLogin() {
    const nick = this.nick.current.value;
    const password = this.password.current.value;
    console.log({ nick, password });
    login(nick, password);
  }

  render() {
    return (
      <div>
        <h1>Inicia sesión</h1>
        <span>Nombre de usuario:</span>
        <input ref={this.nick} />
        <span>Contraseña:</span>
        <input ref={this.password} />
        <button onClick={this.userLogin}>LogIn</button>
      </div>
    );
  }
}
export default Login;
