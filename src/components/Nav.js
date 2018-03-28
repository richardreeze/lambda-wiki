import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  state = {
    fakeCateg: [
      {
        title: 'test',
      },
      {
        title: 'test',
      },
      {
        title: 'test',
      },
      {
        title: 'test',
      }
    ]
  };

  render() {
    return (
      <ul className='nav'>
        {this.state.fakeCateg.map((item, i) => {
          return (
            <li key={i}>{item.title}</li>
          );
        })}
      </ul>
    );
  }
}

export default Nav;