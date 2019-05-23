import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import Home from '../pages/Home';
import reduxActions from '../redux/actions/index.js';

const mapDispatchToProps = dispatch => {
  return {
    loadAppInfo: cookies => {
      dispatch(reduxActions.loadAppInfo(cookies));
    }
  };
};

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
  }

  componentWillMount() {
    const { loadedAppInfo, loadAppInfo } = this.props;
    if (!loadedAppInfo) {
      loadAppInfo(this.cookies);
    }
  }

  render() {
    return (
      <div>
        <header>Header</header>
        <Switch>
          <Route exact path="/" render={() => <Home token={this.props.token} />} />
        </Switch>
        <div>Footer</div>
      </div>
    );
  }
}

const mapStateToProps = props => ({
  token: props && props.token,
  loadedAppInfo: props && props.loadedAppInfo
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainLayout)
);
