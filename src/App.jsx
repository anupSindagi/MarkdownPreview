import './App.css'
import React from 'react'
import {marked} from 'marked'


class App extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
        breaks: true
    });
    this.state = {
      input:
        "# Heading 1 \n ## Heading 2 \n [link](http://www.google.com) \n `inline code` \n ``` \n code block \n ``` \n 1. First item \n2. Second item \n3. Third item \n\n >blockquote \n\n ![alt text](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png) \n\n **bold text** "
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    });
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="shadow p-3 rounded col-8 editor-box  m-4">
            <div className="card shadow">
              <div className="card-header">
                <strong>Markdown Editor</strong>
              </div>
              <div className="card-body">
                <textarea
                  className="w-100"
                  id="editor"
                  onChange={this.onInputChange}
                  value={this.state.input}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-8 shadow p-3 rounded preview-box m-4">
            <div className="card shadow">
              <div className="card-header">
                <strong>Previewer</strong>
              </div>
              <div className="card-body">
                <div
                  id="preview"
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(this.state.input)
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
