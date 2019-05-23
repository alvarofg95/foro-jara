import React, { Component } from 'react';
import Login from '../component/Login';
import { connect } from 'react-redux';

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
    // const { token } = this.props;
    const token = false;
    return <h1>{token ? 'Panel' : <Login />}</h1>;
  }
}

const mapStateToProps = props => {
  console.log({ props });
  return {
    token: props && props.token
  };
};

export default connect(mapStateToProps)(Home);
