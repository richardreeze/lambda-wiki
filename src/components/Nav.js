import React from 'react';
import '../styles/Nav.css';

class Nav extends React.Component {
  state = {
  };

  render() {
    return (
      <aside className='sidebar nav box column is-one-fifth'>
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
        {/* <p className="menu-label">Libraries</p>
        <ul className="menu-list">
          <li><a>Redux</a></li>
          <li><a>Redux</a></li>
          <li><a>Redux</a></li>
          <li><a>Redux</a></li>
        </ul> */}
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
    );
  }
}

export default Nav;