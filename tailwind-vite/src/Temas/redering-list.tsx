import { createSignal, For } from "solid-js";

export function EjemploRenderingList() {
	const [frutas] = createSignal([
		"Manzana",
		"Pera",
		"Sandia",
		"Naranja",
		"Banana",
	]);

	return (
		<div>
			<h1 class="font-extrabold">List Rendering</h1>
			<ul>
				<For each={frutas()}>{(fruta) => <li>{fruta}</li>}</For>
			</ul>
		</div>
	);
}

export function FruitList() {
	const [fruits] = createSignal([
		{ id: 1, name: "Apple" },
		{ id: 2, name: "Banana" },
		{ id: 3, name: "Cherry" },
		{ id: 4, name: "Date" },
	]);

	return (
		<div>
			<h1 class="font-extrabold">List Rendering</h1>
			<ul>
				<For each={fruits()}>
					{(fruit) => (
						<li>
							{fruit.id} {fruit.name}
						</li>
					)}
				</For>
			</ul>
		</div>
	);
}
