import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ADD_USER_MUTATION from '../apiCalls/addUser.mutation';
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
      errorMessage: null,
      accessToPanel: false
    };

    this.nick = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();

    this.registryUser = this.registryUser.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token && !this.props.token) {
      this.setState({ accessToPanel: true });
    }
  }

  registryUser() {
    const nick = this.nick.current.input.current.value;
    const email = this.nick.current.input.current.value;
    const password = this.password.current.input.current.value;

    postToAPI(ADD_USER_MUTATION, { nick, email, password }).then(res => {
      if (res && res.data && res.data.addUser) {
        const {
          data: {
            addUser: { token, email }
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
        this.setState({ error: true, errorMessage: 'Ya existe un usuario con esas credenciales' });
      }
    });
  }

  cancelForm() {
    this.setState({ cancel: true });
  }

  render() {
    const { error, errorMessage, cancel, accessToPanel } = this.state;
    if (accessToPanel) {
      return <Redirect to="/" />;
    }
    if (cancel) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="signInDiv">
        <h1>Registrarme en el foro</h1>
        <TextInput
          required
          minLength={3}
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Nombre de usuario"
          ref={this.nick}
        />
        <TextInput
          required
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Email"
          type="email"
          ref={this.email}
        />
        <TextInput
          required
          minLength={8}
          divClassName="packLoginDiv"
          labelClassName="loginLabel"
          className="loginInput"
          label="Contraseña"
          type="password"
          ref={this.password}
        />
        <CustomButton
          className="logInButton"
          backgroundColor="#4ca540"
          height={35}
          fontSize={20}
          borderRadius="10px"
          onClick={this.registryUser}
          text="Registrarme"
        />
        <CustomButton
          className="signInButton"
          backgroundColor="#2196F3"
          height={35}
          fontSize={20}
          borderRadius="10px"
          onClick={this.cancelForm}
          text="Cancelar"
        />
        {error && <span>{errorMessage}</span>}
      </div>
    );
  }
}

const mapStateToProps = props => ({
  token: props && props.token
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
