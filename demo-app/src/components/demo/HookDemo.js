import React, { useState } from 'react';

function HookDemo() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
          setCount(count + 1);
          console.log("first setCount:", count);
          setCount(count + 1);
          console.log("second setCount:", count);
        }}>
        Click me
      </button>
    </div>
  );
}

export default HookDemo;
