import type { Producto } from "../App"; // Importamos el tipo Producto
import { createSignal, For } from "solid-js"; // Para el bucle

interface PropsCarrito {
  carrito: Producto[];
}

export function CarritoCompras(props: PropsCarrito) {
	const total = () => props.carrito.reduce((acc, product) => acc + product.price, 0);

	return (
	  <div>
		{props.carrito.length === 0 ? (
		  <p>No hay productos en el carrito.</p>
		) : (
		  <>
			<ul class="border flex-col ">
			  <For each={props.carrito}>
				{(product) => (
				  <li class="font-extralight">
				~ {product.name} - {product.price}$
				
				  </li>
				)}
			  </For>
			</ul>
			<div class="mt-4 font-bold">
			  <p>Total: {total()}$</p>
			</div>
		  </>
		)}
	  </div>
	);
  }