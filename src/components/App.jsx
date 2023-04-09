import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1)
  }

  return (
    <div>
    <h1>HI {count}</h1>
    <button type="button" onClick={ () => increment()}>+1</button><button type="button" onClick={ () => decrement()}>-1</button>
    </div>
  );
};
