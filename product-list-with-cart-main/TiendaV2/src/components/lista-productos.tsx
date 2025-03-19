import {
	createEffect,
	createResource,
	createSignal,
	For,
	Match,
	Show,
} from "solid-js";
import type { Producto } from "../App";

interface PropsCarrito{
	updateCarrito: (product: Producto) => void,
	products: Producto[]
}

export function ListaProductos(props: PropsCarrito) {
	return (
		<div class="flex flex-wrap">
			<Show when={props.products} fallback={<p>...</p>}>
				{" "}
				<div class="flex flex-wrap w-full">
					{" "}
					<For each={props.products}>
						{(product) => (
							<div class="w-1/3 p-2 ">
								<img class="" src={product.image.desktop} alt="img" />
								<div class="flex border justify-center">
									<ul>
										<li>
											<button
												type="button"
												class="text-2x1 pl-15 pr-15 border bg-white hover:bg-gray-400 rounded-2xl"
												onClick={() => props.updateCarrito(product)}
											>
												Agregar
											</button>
										</li>
										<li>Categoria: {product.category}</li>
										<li>Nombre: {product.name}</li>
										<li>Precio: {product.price}</li>
									</ul>
								</div>
							</div>
						)}
					</For>
				</div>
			</Show>
		</div>
	);
}
