/*
Documentacion aqui: https://docs.solidjs.com/concepts/signals
*/

import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);
//       ^ getter  ^ setter


console.log(count()); // output: 0

setCount(count() + 1);

console.log(count()); // output: 1

setCount((prevCount) => prevCount + 1);

console.log(count()); // output: 1

function Counter() {
    const [count, setCount] = createSignal(0);
    const increment = () => setCount((prev) => prev + 1);
  
    return (
      <div>
        <span>Count: {count()}</span> {/* Updates when `count` changes */}
        <button type="button" onClick={increment}>
          Increment
        </button>
      </div>
    );
  }