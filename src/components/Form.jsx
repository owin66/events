import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    showData: {
      name: '',
      text: '',
    },
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({ textareaText: value });
  };

  handleShow = e => {
    e.preventDefault();
    const { inputText, textareaText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      showData: {
        name: inputText,
        text: textareaText,
      },
    });
  };

  render() {
    const { inputText, textareaText, showData } = this.state;
    const { name, text } = showData;
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
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
      </>
    );
  }
}
