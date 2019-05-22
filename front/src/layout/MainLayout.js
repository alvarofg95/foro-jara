import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../pages/Home';

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authToken } = this.props;
    return (
      <div>
        <header>Header</header>
        <Switch>
          <Route exact path="/" render={() => <Home logged={!!authToken} />} />
        </Switch>
        <div>Footer</div>
      </div>
    );
  }
}

const mapStateToProps = props => {
  console.log({ props });
  return { authToken: props.auth };
};
export default withRouter(connect(mapStateToProps)(MainLayout));
