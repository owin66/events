import React, { Component } from 'react';

const POSITION = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    text: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end developer',
    text: 'Back-end developer',
  },
];
export default class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    },
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({ textareaText: value });
  };

  handleSelectChange = ({ target: { value } }) => {
    this.setState({ selectText: value });
  };

  handleShow = e => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  render() {
    const { inputText, textareaText, showData, selectText } = this.state;
    const { name, text, position } = showData;
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
          {/* select */}
          <select value={selectText} onChange={this.handleSelectChange}>
            {POSITION.map(({ id, value, text }) => (
              <option key={id} value={value}>
                {text}
              </option>
            ))}
          </select>
          <br />
          {/* button */}
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}
