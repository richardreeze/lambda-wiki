import React from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import '../../styles/Loading.css';

class Loading extends React.Component {
  componentWillMount() {
    nprogress.start();
  }
  componentDidMount() {
    nprogress.done();
  }

  render() {
    return (
      <Route {...this.props} />
    )
  }
}

export default Loading;