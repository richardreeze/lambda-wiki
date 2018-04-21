import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

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
      <nav className="header navbar is-info" aria-label="main navigation">
        <div className="navbar-brand  is-marginless">
          <NavLink className="navbar-item pic" to="/">
            <img src="https://tk.lambdaschool.com/images/lambda_logo_light_small.png" alt="Lambda School"/>
          </NavLink>
          <div role="button" className={`navbar-burger burger ${burgerClass.join('')}`} onClick={this.openBurger} aria-label="menu" data-target="navbarBurgerMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBurgerMenu" className={`navbar-menu is-marginless ${burgerClass.join('')}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">Home</NavLink>
            <div className="navbar-item">
            <div className="field">
              <p className="control has-icon">
                <input className="input is-rounded" type="text" placeholder="Search" />
                <span className="icon is-small"><i className="fas fa-search"></i></span>
              </p>
            </div>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/">New Entry</NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link" to="/">Users</NavLink>
              <div className="navbar-dropdown is-boxed">
                <NavLink className="navbar-item" to="/">All Users</NavLink>
                <NavLink className="navbar-item" to="/">Admins</NavLink>
              </div>
            </div>
            <NavLink className="navbar-item profile" to="/">
              <p className="control">
                <span className="icon">
                  <i className="far fa-user"></i>
                </span>
              </p>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
