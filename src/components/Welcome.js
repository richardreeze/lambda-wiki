import React from 'react';
import { Link } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
import '../styles/Welcome.css';
class Welcome extends React.Component {
  componentWillMount() {
    nprogress.start();
  }
  componentDidMount() {
    nprogress.done();
  }
  render() {
    return (
      <section className="page column box">
        <div className="welcome-head">
          <h1 className="title">Welcome to Lambda Wiki</h1>
          <h2 className="subtitle">
            A simple editable resource to help further your study in programming and computer science.
          </h2>
        </div>
        <div className="cont">
          <p>
          The Lambda Wiki is intended to compliment the <a href="https://tk.lambdaschool.com/">Lambda Training Kit</a> by providing a collaborative separation from the syllabus and individual assignments.
          <br/>
          <br/>
          Any <a href="https://lambdaschool.com/">Lambda</a> students may submit new entries in new/existing categories pending admin (Project Manager/Instructor) approval <Link to="/">here</Link>.
          These entries aren't limited to things studied in class but anything pertaining to programming/comp sci, feel free to add anything interesting you've learned about on your own.
          <br/>
          <br/>
          Wiki entries are formatted in <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Github-Flavored Markdown</a> for the time being.
          <br/>
          <br/>
          <br/>
          Level 2: Each learning outcome includes an Overview and lesson notes that are used during live instruction to teach the concept.<br/>
          Level 3: Each learning outcome includes a challenge to practice and demonstrate you’ve learned each skill.<br/>
          Level 4: Each learning outcome includes a mini-lesson preclass video. Each module includes a guided project to be used during live instruction.<br/>
          As of this update (March 20, 2018) Most of the training kit documentation is on level 1 or 2, but will progressively improve. Each module should level up each month.<br/>
          <br/>
          <br/>
          Graduating students will also have perpetual access to the materials in this wiki, so you’ll continue to benefit from the improvements made over time.
          <br/>
          <br/>
          The site is in <i>Alpha[0.01]</i>, if you find any issues with the site please let us know.
          </p>
        </div>
      </section>
    );
  }
}

export default Welcome;