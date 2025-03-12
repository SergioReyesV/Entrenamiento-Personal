import { createSignal, from } from "solid-js";

export function Componente2() {
  const [count, setCount] = createSignal(0);

  console.log(count());
  return (
    <div>
      <p>Count: {count()}</p>
      <button class="bg-blue-500 hover:bg-blue-800 rounded-2xl text-2xl p-1" type="button" onclick={() => setCount((v) => v + 1)}>Increment</button>
    </div>
  );
}