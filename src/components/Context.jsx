import React, { Component } from 'react';

// 1.создаем контекст чтобы обойти много вложенностей
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
    //   3.передаем консумер и деструктуризируем данные
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
      // 2.вкладіваем его в компонент и в него передаем компонент с данными
      <TitleContext.Provider
        value={{ title: 'simple title', subTitle: 'SubTitle' }}
      >
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}
