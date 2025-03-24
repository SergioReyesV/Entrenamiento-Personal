import { For, Show } from "solid-js";
import type { Producto } from "../App";

interface PropsCarrito {
	updateCarrito: (product: Producto, cantidad: number) => void;
	amountInCarrito: (idCarrito: number) => number;
	products: Producto[];
	carrito: Producto[];
}

export function ListaProductos(props: PropsCarrito) {
	const aumentarCantidad = (product: Producto) => {
		props.updateCarrito(product, 1);
		props.amountInCarrito(product.id);
	};

	const disminuirCantidad = (product: Producto) => {
		props.updateCarrito(product, -1);
		props.amountInCarrito(product.id);
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
					{(product) => {
						return (
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
									<Show when={props.amountInCarrito(product.id) === 0}>
										<div class="flex items-center">
											<button
												type="button"
												class="p-2 bg-orange-200 text-black rounded-2xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center space-x-2"
												onClick={() => aumentarCantidad(product)} // Aumentar cantidad
											>
												<img
													src="/assets/images/icon-add-to-cart.svg"
													alt="Add to Cart"
													class="w-5 h-5"
												/>

												<span class="group-hover: text-red">Add to cart</span>
											</button>
										</div>
									</Show>
									<Show when={props.amountInCarrito(product.id) > 0}>
										<div class="flex items-center">
											<button
												type="button"
												class="p-2 bg-orange-200 text-black rounded-l-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
												onClick={() => disminuirCantidad(product)} // Disminuir cantidad
											>
												<img
													src="assets\images\icon-decrement-quantity.svg"
													alt="Restar"
													class="w-6 h-6 bg-red-800 rounded-2xl"
												/>
											</button>
											<button
												type="button"
												class="p-2 bg-orange-200 text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center space-x-2"
											>
												Agregar
											</button>
											<button
												type="button"
												class="p-2 bg-orange-200 text-black rounded-r-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
												onClick={() => aumentarCantidad(product)} // Aumentar cantidad
											>
												<img
													src="assets\images\icon-increment-quantity.svg"
													alt="Sumar"
													class="w-6 h-6 bg-red-800 rounded-2xl"
												/>
											</button>
										</div>
									</Show>
								</div>
							</div>
						);
					}}
				</For>
			</Show>
		</div>
	);
}
