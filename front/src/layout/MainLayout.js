import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import reduxActions from '../redux/actions/index.js';
import Login from '../component/Login';
import SignIn from '../component/SignIn';

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
        {this.props.token && <header>Header</header>}
        <Switch>
          <Route exact path="/login" render={() => <Login token={this.props.token} />} />
          <Route exact path="/registro" render={() => <SignIn token={this.props.token} />} />
          <Route exact path="/" render={() => <Home token={this.props.token} />} />
          <Route
            exact
            path="/chat/:slug"
            render={({ match: { params } }) => <Chat slug={params.slug} />}
          />
        </Switch>
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
