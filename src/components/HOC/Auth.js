import React, { Component } from 'react';
import { connect } from 'react-redux';
const Aux = props => props.children;

export default ComposedComponent => {
  class Auth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <Aux>
          {this.props.authenticated ? <ComposedComponent {...this.props}/> : null}
        </Aux>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(Auth);
};
