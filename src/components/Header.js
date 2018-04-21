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
            <div className="field search">
              <p className="control has-icon">
                <input className="input search-bar is-rounded" type="text" placeholder="Search" />
                <span className="icon is-small"><i className="search-icon fas fa-search"></i></span>
              </p>
            </div>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/">New Entry</NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link is-hidden-touch">
                <p className="control">
                  <span className="icon">
                    <i className="far fa-user"></i>
                  </span>
                </p>
              </div>
              <div className="navbar-dropdown is-right is-boxed">
                <NavLink className="navbar-item" to="/">My Profile</NavLink>
                <NavLink className="navbar-item" to="/">Account Settings</NavLink>
                <hr class="dropdown-divider" />
                <NavLink className="navbar-item" to="/">All Users</NavLink>
                <NavLink className="navbar-item" to="/">Admins</NavLink>
                <hr class="dropdown-divider" />
                <a className="navbar-item" href="https://airtable.com/shryCoayae2Gv8Z3x" rel="noopener noreferrer" target="_blank">Feedback</a>
                <hr class="dropdown-divider" />
                <NavLink className="navbar-item" to="/">Log Out</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
