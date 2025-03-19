import { createSignal } from "solid-js";
import "./App.css";

function App() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<div class="">
				<h1 class="m-20">MI PAGINA WEB</h1>
				<button class="border ml-20 p-2" type="button" onClick={() => setCount((valor) => valor+1)}>
					BOTON DE INCREMENTO = {count()}
				</button>
			</div>
		</>
	);
}

export default App;
