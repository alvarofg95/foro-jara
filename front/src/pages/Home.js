import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Menu from '../component/Menu';
import Panel from '../component/Panel';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token && !this.props.token) {
      this.setState({ logged: nextProps.token });
    }
  }

  render() {
    console.log('renderProps', this.props);
    const { token } = this.props;
    if (token) {
      return (
        <div>
          <Panel />
          <Menu />
        </div>
      );
    }
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = props => ({
  token: props && props.token,
  nick: props && props.nick
});
export default connect(mapStateToProps)(Home);
