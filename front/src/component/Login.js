import React, { Component } from 'react';
import { connect } from 'react-redux';
import LOGIN_QUERY from '../apiCalls/login.query';
import postToAPI from '../apiCalls/postToAPI';
import reduxActions from '../redux/actions/index';
import TextInput from './inputs/TextInput';
import CustomButton from './buttons/CustomButton';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: ({ nick, email, token }) => {
      dispatch(reduxActions.loginUser(nick, email, token));
    }
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: null
    };

    this.nick = React.createRef();
    this.password = React.createRef();

    this.userLogin = this.userLogin.bind(this);
    this.openSignInForm = this.openSignInForm.bind(this);
  }

  userLogin() {
    const nick = this.nick.current.input.current.value;
    const password = this.password.current.input.current.value;
    postToAPI(LOGIN_QUERY, { nick, password }).then(res => {
      console.log({ res });
      if (res && res.data && res.data.login) {
        const {
          data: {
            login: { token, email }
          }
        } = res;
        if (token) {
          this.props.loginUser({
            token,
            nick,
            email
          });
        }
      } else {
        this.setState({ error: true, errorMessage: 'No existe un usuario con esas credenciales' });
      }
    });
  }

  openSignInForm() {
    this.setState({ registerForm: true });
  }

  render() {
    const { error, errorMessage, registerForm } = this.state;
    return (
      registerForm ? (<span>Formulario de registro</span>) : (<div className="loginDiv">
        <h1>Inicia sesión</h1>
        <TextInput
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Nombre de usuario"
          ref={this.nick}
        />
        <TextInput
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Contraseña"
          type="password"
          ref={this.password}
        />
        <CustomButton className="logInButton" onClick={this.userLogin} text="Iniciar sesión" />
        <CustomButton className="signInButton" onClick={this.openSignInForm} text="No estoy registrado" />
        {error && <span>{errorMessage}</span>}
      </div>)
     
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
