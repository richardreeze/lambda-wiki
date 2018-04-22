import React from 'react';
import '../styles/NewEntry.css';

class NewEntry extends React.Component {

  render() {
    return (
      <div className="column box">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Dijkstra's Algorithm" />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <div className="select">
              <select>
                <option>Javascript</option>
                <option>C</option>
                <option>Python</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button className="button is-link">New Category</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEntry;