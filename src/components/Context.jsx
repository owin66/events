import React, { Component } from 'react';

const TitleContext = React.createContext();

const LevelOne = () => {
  return (
    <>
      <LevelTwo />
    </>
  );
};

const LevelTwo = () => {
  return (
    <>
      <LevelThree />
    </>
  );
};

const LevelThree = () => {
  return (
    <TitleContext.Consumer>
      {({ title, subTitle }) => (
        <>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </>
      )}
    </TitleContext.Consumer>
  );
};

export default class Context extends Component {
  render() {
    return (
      <TitleContext.Provider
        value={{ title: 'simple title', subTitle: 'SubTitle' }}
      >
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}
