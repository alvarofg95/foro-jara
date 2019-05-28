import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LOGIN_QUERY from '../apiCalls/login.query';
import postToAPI from '../apiCalls/postToAPI';
import reduxActions from '../redux/actions/index';
import TextInput from './inputs/TextInput';
import CustomButton from './buttons/CustomButton';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: ({ userId, nick, email, token }) => {
      dispatch(reduxActions.loginUser(userId, nick, email, token));
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
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  userLogin() {
    const nick = this.nick.current.input.current.value;
    const password = this.password.current.input.current.value;
    if (nick && password) {
      postToAPI(LOGIN_QUERY, { nick, password }).then(res => {
        if (res && res.data && res.data.login) {
          const {
            data: {
              login: { _id, token, email }
            }
          } = res;
          if (token) {
            this.props.loginUser({
              userId: _id,
              token,
              nick,
              email
            });
            this.setState({ accessToPanel: true });
          }
        } else {
          this.setState({
            error: true,
            errorMessage: 'No existe un usuario con esas credenciales'
          });
        }
      });
    } else {
      this.setState({
        error: true,
        errorMessage: 'El nick y la contraseña son campos obligatorios'
      });
    }
  }

  openSignInForm() {
    this.setState({ registerForm: true });
  }

  onKeyPressed(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.userLogin();
    }
  }

  render() {
    const { error, errorMessage, registerForm, accessToPanel } = this.state;
    if (accessToPanel) {
      return <Redirect to="/" />;
    }
    return registerForm ? (
      <Redirect to="/registro" />
    ) : (
      <div className="loginDiv">
        <h1>Inicia sesión</h1>
        <TextInput
          required
          minLength={3}
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Nombre de usuario"
          onKeyDown={this.onKeyPressed}
          ref={this.nick}
        />
        <TextInput
          required
          minLength={8}
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Contraseña"
          type="password"
          onKeyDown={this.onKeyPressed}
          ref={this.password}
        />
        {error && <p>{errorMessage}</p>}
        <CustomButton
          className="logInButton"
          backgroundColor="#4ca540"
          height={35}
          fontSize={20}
          borderRadius="10px"
          onClick={this.userLogin}
          text="Iniciar sesión"
        />
        <CustomButton
          className="signInButton"
          backgroundColor="#2196F3"
          height={35}
          fontSize={20}
          borderRadius="10px"
          onClick={this.openSignInForm}
          text="Registrar"
        />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
