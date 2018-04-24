import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Aux = props => props.children;
class Nav extends React.Component {
  state = {
    menuOpen: false,
  };
  openMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen});
  }
  render() {
    const openMenu = [];
    if(this.state.menuOpen) {
      openMenu.push('is-active');
    }
    return (
      <Aux>
        <aside className='menu sidebar nav box column is-one-fifth is-hidden-mobile'>
          <p className="menu-label">Languages</p>
          <ul className="menu-list">
            <li><a>Javascript</a></li>
            <li><a>C</a></li>
            <li><a>Python</a></li>
          </ul>
          <p className="menu-label">Web/UI Frameworks</p>
          <ul className="menu-list">
            <li><a>React</a></li>
            <li><a>Vue</a></li>
            <li><a>Angular</a></li>
            <li><a>Django</a></li>
          </ul>
          <p className="menu-label">Databases</p>
          <ul className="menu-list">
            <li><a>MySQL</a></li>
            <li><a>SQLite</a></li>
            <li><a>MongoDB</a></li>
            <li><a>PostgreSQL</a></li>
          </ul>
          <p className="menu-label">Computer Science</p>
          <ul className="menu-list">
            <li><a>Data Structures</a></li>
            <li><a>Theory of Computation</a></li>
            <li><a>Algorithms</a></li>
            <li><a>Operating Systems</a></li>
            <li><a>Graphs</a></li>
            <li><a>Cellular Automata</a></li>
          </ul>
          <p className="menu-label">Software Development</p>
          <ul className="menu-list">
            <li><a>Authentication</a></li>
            <li><a>Unit Testing</a></li>
            <li><a>Security</a></li>
          </ul>
        </aside>
          <aside className="menu sidebar nav column is-hidden-tablet">
          <div className={`dropdown mobile-menu ${openMenu.join('')}`}>
            <div className="dropdown-trigger mobile-menu">
              <button className="button mobile-menu-button" onClick={this.openMenu} aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Categories</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu mobile-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <NavLink to="/" className="dropdown-item">
                  Javascript
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  C
                </NavLink>
                <NavLink to="/" className="dropdown-item is-active">
                  Python
                </NavLink>
              </div>
            </div>
          </div>
        </aside>
      </Aux>
    );
  }
}

export default Nav;