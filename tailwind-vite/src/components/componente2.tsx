import { createSignal, from, Show } from "solid-js";

export function Componente2() {
	const [count, setCount] = createSignal(0);

	console.log(count());
	return (
		<div>
			<p>Count: {count()}</p>
			<button
				class="bg-blue-500 hover:bg-blue-800 rounded-2xl text-2xl p-1"
				type="button"
				onclick={() => setCount((v) => v + 1)}
			>
				Increment
			</button>
		</div>
	);
}

export function Componente3() {
	const [count, setCount] = createSignal(0);
	return (
		<div>
			{count() > 5 ? (
				<div>Count limit reached</div>
			) : (
				<>
					<p>Count: {count()}</p>
					<button
						class="bg-blue-500 hover:bg-blue-800 rounded-2xl text-2xl p-1"
						type="button"
						onClick={() => setCount((v) => v + 1)}
					>
						Increment
					</button>
				</>
			)}
		</div>
	);
}

export function Componente4() {
	const [count, setCount] = createSignal(0);
	return (
		<div>
			{count() === 10 ? (
				<>
					<h1>El Contador llego a 10</h1>
					<button
						class="bg-red-500 hover:bg-red-800 rounded-2xl text-2xl p-1"
						type="button"
						onClick={() => setCount((v) => v - 1)}
					>
						Decrement
					</button>
				</>
			) : (
				<>
					<p>Count: {count()}</p>
					<button
						class="bg-blue-500 hover:bg-blue-800 rounded-2xl text-2xl p-1"
						type="button"
						onClick={() => setCount((v) => v + 1)}
					>
						Increment
					</button>
					<button
						class="bg-red-500 hover:bg-red-800 rounded-2xl text-2xl p-1"
						type="button"
						onClick={() => setCount((v) => v - 1)}
					>
						Decrement
					</button>
				</>
			)}
		</div>
	);
}

export function Componente5() {
  const [count, setCount] = createSignal(0)

  return (
    <div>
      <Show
        when={count() > 5}
        fallback={
          <>
            <p>Count: {count()}</p>
            <button type="button" onClick={() => setCount((prev) => prev+1)}>Increment</button>
          </>
        }
      >
        <div>Count limit reached</div>
      </Show>
    </div>
  )
}
