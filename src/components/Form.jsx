import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    text: '',
  };

  render() {
    return (
      <>
        <form action="">
          {/* input  */}
          <label htmlFor="">
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          {/* textarea */}
          <label htmlFor="">Text:</label>
          <textarea name="text" />
          <br />
          {/* button */}
          <button>Show</button>
        </form>
      </>
    );
  }
}
