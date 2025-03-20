import { createSignal } from "solid-js";
import "./App.css";
import { ListaUsuarios } from "./components/lista-usuarios";
import { BuscadorUsuario } from "./components/buscar-usuario";

function App() {
	const [count, setCount] = createSignal(0);
	const [userId, setUserId] = createSignal("");

	return (
		<>
			<div class="">
				<h1 class="ml-20">MI PAGINA WEB</h1>
				<button
					class="border ml-20 mt-5 p-2"
					type="button"
					onClick={() => setCount((valor) => valor + 1)}
				>
					BOTON DE INCREMENTO = {count()}
				</button>
			</div>
			<div>
				{/* Componente BuscadorUsuario para ingresar el ID */}
				<h2 class="ml-20 mt-10 text-2xl font-bold">Filtrar Usuario</h2>
				<BuscadorUsuario setUserId={setUserId} />

				<div class="ml-15 mt-15">
					{/* Componente ListaUsuarios que recibe el ID buscado */}
					<ListaUsuarios userId={userId()} />
				</div>
			</div>
		</>
	);
}

export default App;
