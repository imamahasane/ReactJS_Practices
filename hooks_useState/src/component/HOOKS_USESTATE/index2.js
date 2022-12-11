import React, { useState } from 'react';

function HOOKS_USESTATE_2() {
  const [count, setCount] = useState(0);

  const handler = () => {
    setCount(count + 1);
  };

  const handler2 = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handler}>Increment</button>
      <button onClick={handler2}>Decrement</button>
    </div>
  );
}

export default HOOKS_USESTATE_2;
