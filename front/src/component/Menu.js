import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import CustomButton from './buttons/CustomButton';
import reduxActions from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(reduxActions.logout());
    }
  };
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogout() {
    if (this.props.logout) {
      this.props.logout();
    }
  }

  render() {
    return (
      <div className="menuDiv">
        <ProfileInfo />
        <ul>
          <li>PERFIL</li>
          <li>CONFIGURACIÓN</li>
          <li>AMIGOS</li>
          <li>MULTIMEDIA</li>
          <li>
            <CustomButton onClick={this.onClickLogout} text="CERRAR SESIÓN" />
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Menu);
