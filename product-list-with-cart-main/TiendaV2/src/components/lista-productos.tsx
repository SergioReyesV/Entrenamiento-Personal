import { createSignal, For, Match, Show, Switch } from "solid-js";
import type { Producto } from "../App";

interface PropsCarrito {
	updateCarrito: (product: Producto, cantidad: number) => void;
	products: Producto[];
}
export function ListaProductos(props: PropsCarrito) {
	const [contadorProducto, setContadorProducto] = createSignal<
		Map<number, number>
	>(new Map());

	const aumentarCantidad = (product: Producto) => {
		props.updateCarrito(product, 1);

		setContadorProducto((prevContador) => {
			const newContador = new Map(prevContador);
			const currentCount = newContador.get(product.id) || 0;
			newContador.set(product.id, currentCount + 1); // Incrementamos el contador
			return newContador;
		});
	};

	// Función para disminuir la cantidad de un producto
	const disminuirCantidad = (product: Producto) => {
		setContadorProducto((prevContador) => {
			const newContador = new Map(prevContador);
			const currentCount = newContador.get(product.id) || 0;
			if (currentCount > 0) {
				newContador.set(product.id, currentCount - 1); // Decrementamos el contador
				props.updateCarrito(product, -1); // Llamamos a updateCarrito al decrementar
			}
			return newContador;
		});
	};

	return (
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
			<Show
				when={props.products.length > 0}
				fallback={
					<p class="text-center text-gray-600">Cargando productos...</p>
				}
			>
				<For each={props.products}>
					{(product) => (
						<div class="bg-red-50 border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
							<img
								class="w-full h-56 object-cover"
								src={product.image.desktop}
								alt={product.name}
							/>
							<div class="p-4 flex flex-col justify-between space-y-4">
								<div class="space-y-2">
									<p class="text-xl font-semibold text-gray-800">
										{product.name}
									</p>
									<p class="text-sm text-gray-500">{product.category}</p>
									<p class="text-lg text-gray-700 font-medium">
										{product.price}$
									</p>
								</div>
								<Switch>
									<Match when={(contadorProducto().get(product.id) || 0) === 0}>
										<button
											type="button"
											class="mt-4 w-full py-2 px-4 bg-rose-400 text-black rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
											onClick={() => aumentarCantidad(product)}
										>
											Agregar al carrito
										</button>
									</Match>
									<Match when={(contadorProducto().get(product.id) || 0) > 0}>
										<div class="flex items-center justify-center">
											<button
												type="button"
												class="p-2 bg-rose-400 text-white rounded-l-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
												onClick={() => disminuirCantidad(product)} // Disminuir cantidad
											>
												-
											</button>
											<button
												type="button"
												class="p-2 bg-rose-300 text-white focus:outline-none"
											>
												Agregar {contadorProducto().get(product.id)}
											</button>
											<button
												type="button"
												class="p-2 bg-rose-400 text-white rounded-r-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
												onClick={() => aumentarCantidad(product)}
											>
												+
											</button>
										</div>
									</Match>
								</Switch>
							</div>
						</div>
					)}
				</For>
			</Show>
		</div>
	);
}
