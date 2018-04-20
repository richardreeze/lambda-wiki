import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class App extends Component {
  state = {
    burger: false,
  };
  openBurger = () => {
    this.setState({burger: !this.state.burger});
  }
  render() {
    const burgerClass = [];
    if(this.state.burger) {
      burgerClass.push('is-active');
    }
    return (
      <nav className="navbar">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">Lambda Wiki</NavLink>
        <div role="button" className={`navbar-burger burger ${burgerClass.join('')}`} onClick={this.openBurger} ariaLabel="menu" dataTarget="navbarBurgerMenu">
          <span ariaHidden="true"></span>
          <span ariaHidden="true"></span>
          <span ariaHidden="true"></span>
        </div>
      </div>
      <div id="navbarBurgerMenu" className={`navbar-menu ${burgerClass.join('')}`}>
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">Home</NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink className="navbar-link" to="/">Users</NavLink>
            <div className="navbar-dropdown is-boxed">
              <NavLink className="navbar-item" to="/">All Users</NavLink>
              <NavLink className="navbar-item" to="/">Admins</NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <p className="control">
              <NavLink className="button" to="/">
                <span className="icon">
                  <i className="far fa-user"></i>
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </nav>
    );
  }
}

export default App;
