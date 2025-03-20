import { createEffect, createSignal, For, Show } from "solid-js";
import type { Producto } from "../App";

interface PropsCarrito {
	updateCarrito: (product: Producto) => void;
	products: Producto[];
}
export function ListaProductos(props: PropsCarrito) {
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
								<Show when={props.updateCarrito.length === 0}>
									<button
										type="button"
										class="mt-4 w-full py-2 px-4 bg-rose-400 text-black rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
									>
										Agregar al carrito
									</button>
								</Show>
								<button
									type="button"
									class="mt-4 w-full py-2 px-4 bg-rose-400 text-black rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
									onClick={() => props.updateCarrito(product)}
								>
									Agregar al carrito
								</button>
							</div>
						</div>
					)}
				</For>
			</Show>
		</div>
	);
}
