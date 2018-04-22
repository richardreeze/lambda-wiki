import React from 'react';
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import '../styles/NewEntry.css';

import 'brace/mode/markdown';
import 'brace/theme/monokai';

class NewEntry extends React.Component {
  state = {
    editor: '',
    preview: false,
  }
  onChange = (event) => {
    // console.log(event);
    this.setState({editor: event});
  }
  togglePreview = () => {
    this.setState({preview: !this.state.preview});
  }

  render() {
    const previewActive = [];
    if(this.state.preview) {
      previewActive.push('is-active');
    }
    return (
      <div className="column box new-entry">
      <div className="columns">
          <div className="column is-one-third">
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
            <button onClick={this.togglePreview} className="button is-info">Preview</button>
            <div className={`modal ${previewActive}`}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Preview</p>
                  <button onClick={this.togglePreview} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body content">
                  <Markdown skipHtml={true} source={this.state.editor}/>
                </section>
              </div>
              <button onClick={this.togglePreview} className="modal-close" aria-label="close"></button>
            </div>
          </div>
          <AceEditor
            mode="markdown"
            theme="monokai"
            name="new_wiki_entry"
            className="column"
            defaultValue="## Welcome
            ----
            `Here is where you can write markdown`"
            width="100%"
            height="80vh"
            onChange={this.onChange}
            value={this.state.editor}
            fontSize={14}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{$blockScrolling: 'Infinity'}}
            setOptions={{
            showInvisibles: true,
            scrollPastEnd: true,
            animatedScroll: true,
            showLineNumbers: true,
            tabSize: 2,
            }}/>
        </div>
      </div>
    );
  }
}

export default NewEntry;