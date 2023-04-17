import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({ textareaText: value });
  };

  render() {
    const { inputText, textareaText } = this.state;
    return (
      <>
        <form action="">
          {/* input  */}
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          {/* textarea */}
          <label htmlFor="">Text:</label>
          <textarea
            name="text"
            value={textareaText}
            onChange={this.handleTextareaChange}
          />
          <br />
          {/* button */}
          <button>Show</button>
        </form>
      </>
    );
  }
}
