import { createSignal, Match, Switch } from "solid-js";
import { BotonMenos } from "./botonMenos";

export function AgregarAlCarrito() {
	const [count, setCount] = createSignal(0);
	return (
		
			<Switch>
				<Match when={count() > 0}>
						<div class="mr-5">
							<div class="ml-5">
								<button	type="button" class="text-2x1 border bg-white hover:bg-gray-400 rounded-4xl pl-4 pr-4" onclick={() => setCount((v) => v - 1)}> - </button>
							</div>
						</div>
						<div>
						<button type="button" class="text-2x1 pl-15 pr-15 border bg-white hover:bg-gray-400 rounded-2xl" onclick={() => setCount((v) => v + 1)}>Agregar {count()}</button>
						</div>
						<div>
							<button type="button" class="text-2x1 border bg-white hover:bg-gray-400 rounded-4xl pl-4 pr-4" onclick={() => setCount((v) => v + 1)}>+</button>
						</div>
						
				</Match>
				<Match when={count() < 1}>
					<button	type="button" class="text-2x1 pl-15 pr-15 border bg-white hover:bg-gray-400 rounded-2xl" onclick={() => setCount((v) => v + 1)}>Agregar</button>
				</Match>
			</Switch>
	);
}