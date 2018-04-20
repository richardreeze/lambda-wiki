import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  state = {
  };

  render() {
    return (
      <aside className='nav column is-one-third'>
        <p className="menu-label">Languages</p>
        <ul className="menu-list">
          <li><a>Javascript</a></li>
          <li><a>C</a></li>
          <li><a>Python</a></li>
        </ul>
        <p className="menu-label">Web/UI Frameworks</p>
        <ul className="menu-list">
          <li><a>React</a></li>
          <li><a>Django</a></li>
        </ul>
        <p className="menu-label">Computer Science</p>
        <ul className="menu-list">
          <li><a>Data Structures</a></li>
          <li><a>Algorithms</a></li>
          <li><a>Operating Systems</a></li>
        </ul>
      </aside>
    );
  }
}

export default Nav;