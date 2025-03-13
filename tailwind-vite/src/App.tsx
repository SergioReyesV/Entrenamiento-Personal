import { createSignal } from "solid-js";
import { ContadorAutomatico, MyComponent } from "./components/componente1";
import {
	Componente2,
	Componente3,
	Componente4,
	Componente5,
} from "./components/componente2.tsx";
import { NombreInput } from "./components/componentInput.tsx";
import {
	MyComponentName,
	MyComponentName2,
} from "./components/componentProp.tsx";
import { EjemploEffect } from "./Temas/createEffect.tsx";


function hola() {
	return "Hola esta es una funcion que devuelve string y la estoy llamando por medio de una prop de mi componente";
}


function App() {
	const obj = { name: "Ryan" };

	const [nombre, setnombre] = createSignal('');

	const nameSetter = (value: string) => setnombre(value);

	return (
		<div>
			<h1 class="border p-2 m-2">
				Componente Contador Autmatico<ContadorAutomatico />
			</h1>
			<h1 class="border p-2 m-2">
				Componente 1<MyComponent />
			</h1>
			<h1 class="border p-2 m-2">
				Componente 2 <Componente2 />
			</h1>
			<h1 class="border p-2 m-2">
				Componente 3 <Componente3 />
			</h1>
			<h1 class="border p-2 m-2">
				Componente 4 <Componente4 />
			</h1>
			<h1 class="border p-2 m-2">
				Componente 5 <Componente5 />
			</h1>
			<h1 class="border p-2 m-2">
				<MyComponentName name={obj.name} view={Componente3} fun={hola} />
			</h1>
			<h1 class="border p-2 m-2">
				<MyComponentName2 nombre={nombre()} />
			</h1>
			<h1 class="border p-2 m-2">
				<NombreInput funget={nombre()} funset={nameSetter}/>
			</h1>
			<h1 class="border p-2 m-2">
				<EjemploEffect />
			</h1>
		</div>
	);
}

export default App;
