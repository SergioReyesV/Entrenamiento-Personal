import {createEffect,	createResource,	createSignal,	For,	Match,	Show,} from "solid-js";
import {} from '../App'
import { __unstable__loadDesignSystem } from "tailwindcss";
import type { Producto } from "../App";



export function ListaProductos(props: Producto) {
	

	// function agregarCarrito(product: Props) {
	// 	setCarrito((prev) => {
	// 		const copy = [...prev];
	// 		return [...copy, product];
	// 	});
	// }


	return (
		<div class="flex flex-wrap">
			<Show when={props.products} fallback={<p>Loading...</p>}>
				{" "}
				{/*when={props.products} evalúa si los productos están disponibles (es decir, si props.productsiene datos). Si es verdadero, se muestra la lista de productos.*/}
				<div class="flex flex-wrap w-full">
					{" "}
					{/* fallback={<p>Loading...</p>} se muestra mientras los datos de productos aún no se hayan cargado (es decir, si props.productsstá vacío o en estado de carga). */}
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
												// onClick={() => agregarCarrito(product)}
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
			{/* <div>Productos agregados {carrito()?.length}</div> */}
		</div>
	);
}
