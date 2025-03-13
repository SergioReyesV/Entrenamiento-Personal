import { createSignal } from "solid-js";

export function MyComponent() {
	return <div>Hello World</div>;
}

export function ContadorAutomatico() {

	const [count, setcount] = createSignal(0);

	setInterval(() => setcount(() => count() + 1), 1000);
	
  return (
		<div>
			<h1>El conteo es {count()}</h1>
		</div>
	);
}