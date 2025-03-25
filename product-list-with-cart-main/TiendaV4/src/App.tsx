import { createResource, createSignal, Show } from "solid-js";
import "./App.css";
import { CarritoCompras } from "./components/carrito-compras";
import { ListaProductos } from "./components/lista-productos";

export interface Producto {
	cantidad: number;
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
	const [carrito, setCarrito] = createSignal<Producto[]>([]);

	function updateCarrito(product: Producto, cantidad: number) {
		setCarrito((prevCarrito) => {
			const carritoActualizado = [...prevCarrito];
			const index = carritoActualizado.findIndex((p) => p.id === product.id);

			if (index !== -1) {
				const existingProduct = carritoActualizado[index];
				carritoActualizado[index] = {
					...existingProduct,
					cantidad: existingProduct.cantidad + cantidad,
				};
			} else {
				carritoActualizado.push({ ...product, cantidad: 1 });
			}
			const carritoFinal = carritoActualizado.filter(
				(product) => product.cantidad > 0,
			);
			return carritoFinal;
		});
	}

	function amountInCarrito(productId: number) {
		const carritoActual = carrito();
		const producto = carritoActual.find((item) => item.id === productId);
		if (producto) {
			return producto.cantidad;
		}
		return 0;
	}

	function removeProduct(productId: number) {
		setCarrito((prev) => prev.filter((product) => product.id !== productId));
	}

	return (
		<>
			<div class="bg-gray-100">
				<main class="grid lg:grid-cols-[1fr_auto] gap-6 p-6">
					<div class="bg-gray-100 rounded-lg p-6">
						<h1 class="text-3xl font-mono font-bold mb-6">Desserts</h1>
						<Show
							when={productsFetch}
							fallback={<p class="text-center text-gray-600">Cargando...</p>}
						>
							<ListaProductos
								products={productsFetch() || []}
								updateCarrito={updateCarrito}
								carrito={carrito()}
								amountInCarrito={amountInCarrito}
							/>
						</Show>
					</div>

					<div class="bg-gray-100 rounded-lg p-6 lg:w-80">
						<h2 class="text-2xl font-semibold text-orange-800 mb-4">
						Your Cart
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
