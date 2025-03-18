	import { createResource, createSignal, Show } from "solid-js";
	import "./App.css";
	import { CarritoCompras } from "./components/carrito-compras";
	import { ListaProductos } from "./components/lista-productos";

	export interface Producto {
			products: unknown;
			id:       number;
			image:    {
				thumbnail: string;
				mobile:    string;
				tablet:    string;
				desktop:   string;
			};
			name:     string;
			category: string;
			price:    number;
	}


	const fetchProducto = async (): Promise<Producto[]> => {
		const res = await fetch("http://localhost:4000/products");
		return res.json();
	};


	export function App() {
		const [products] = createResource(fetchProducto);

		return (
			<>
				<div class="">
					Principal
					<div class="mr-20 ml-20 mt-6 flex text-center flex-col bg-rose-50 border">
						Box secundaria
						<div class=" flex flex-wrap justify-between">
							<div class="w-full md:w-2/3 p-2 text-start">
								<div class=" text-start text-3xl">Productos</div>
								<Show when={products.loading}>siii</Show>
								<Show when={products()}>
									<ListaProductos  products={products() ?? []}/>
								</Show>
							</div>
							<div class="w-full md:w-1/3 p-2 border">
								<div class="border mt-10">Carrito</div>
								<CarritoCompras />
								<p>{}</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	export default App;
