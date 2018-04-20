import React from 'react';
import '../styles/Welcome.css';
class Welcome extends React.Component {
  render() {
    return (
      <section className="page column box">
        <div className="cont">
          <h1 className="title">Welcome to Lambda Wiki</h1>
          <h2 className="subtitle">
            A simple editable resource to help further your study in programming and computer science.
          </h2>
        </div>
      </section>
    );
  }
}

export default Welcome;