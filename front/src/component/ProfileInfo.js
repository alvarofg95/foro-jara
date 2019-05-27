import React from 'react';
import { connect } from 'react-redux';
import Icon from './images/Icon';

const profileInfo = ({ nick = 'Álvaro' }) => {
  return (
    <div>
      <Icon width="100%" src={require('../images/avatar.png')} />
      <p className="profileInfoP">{nick}</p>
    </div>
  );
};

const mapStateToProps = props => ({
  token: props && props.token,
  nick: props && props.nick
});

export default connect(mapStateToProps)(profileInfo);
