import { useState } from 'react';
import Rendering from './Rendering';

export const LessonOne = () => {
  const people = ['Jack', 'Bayonet', 'Kostya', 'Yana', 'Pasha'];

  const TABS_BTN = [
    { dataName: 1, title: 'Tab1', icon: '+' },
    { dataName: 2, title: 'Tab2', icon: '*' },
    { dataName: 3, title: 'Tab3', icon: '$' },
  ];
  // СОЗДАЕМ СЧЕТЧИК
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>HI {count >= 3 ? `this count = ${count}` : 'dima'}</h1>
      <h2>{count}</h2>
      <button type="button" onClick={() => increment()}>
        +1
      </button>
      <button type="button" onClick={() => decrement()}>
        -1
      </button>
      <br />
      {count >= 1 ? <Rendering peoples={people} tabs={TABS_BTN} /> : null}
    </>
  );
};
