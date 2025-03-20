import { createResource, createSignal, Show } from "solid-js";
import "./App.css";
import { CarritoCompras } from "./components/carrito-compras";
import { ListaProductos } from "./components/lista-productos";

export interface Producto {
	id: number;
	name: string;
	category: string;
	price: number;
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
}

const fetchProducto = async (): Promise<Producto[]> => {
	const res = await fetch("http://localhost:4000/products");
	return res.json();
};

export function App() {
	const [productsFetch] = createResource(fetchProducto);
	const [carrito, setcarrito] = createSignal<Producto[]>([]);

	function updateC(product: Producto) {
		setcarrito((prev) => [...prev, product]);
	}

	function removeProduct(productId: number) {
		setcarrito((prev) => prev.filter((product) => product.id !== productId));
	}

	return (
		<>
			<div class="min-h-screen bg-gray-50 flex flex-col">
				<header class="bg-white text-rose-500 p-4 shadow-md">
					<h1 class="text-3xl font-semibold text-center">Tienda De Postres</h1>
				</header>

				<main class="flex flex-1 p-6 space-x-6">
					{/* Sección de Productos */}
					<div class="flex-1 bg-rose-50 rounded-lg shadow-md p-6 border">
						<h2 class="text-2xl font-semibold text-gray-800 mb-4">Productos</h2>
						<Show
							when={productsFetch}
							fallback={<p class="text-center text-gray-600">Cargando...</p>}
						>
							<Show when={productsFetch}>
								<ListaProductos
									products={productsFetch() || []}
									updateCarrito={updateC}
								/>
							</Show>
						</Show>
					</div>

					{/* Sección de Carrito */}
					<div class="w-full md:w-1/3 bg-rose-50 rounded-lg shadow-md p-6 border">
						<h2 class="text-2xl font-semibold text-gray-800 mb-4">
							Carrito de Compras
						</h2>
						<CarritoCompras carrito={carrito()} removeProduct={removeProduct} />
					</div>
				</main>

				<footer class="bg-white text-rose-500 text-center p-4">
					<p>&copy; 2025 Tienda Online. Todos los derechos reservados.</p>
				</footer>
			</div>
		</>
	);
}

export default App;
