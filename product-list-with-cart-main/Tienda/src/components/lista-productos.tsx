import { createResource, Switch, Match, Show, onMount, For } from "solid-js";
import { createSignal } from "solid-js";
import { AgregarAlCarrito } from "./boton-agregar";
//
interface Props{
	contador: number;
}

const fetchProducto = async () => {
	const res = await fetch("http://localhost:4000/products");
	return res.json();
};

export function MostrarProductos() {
	const [products] = createResource(fetchProducto);
	console.log("Loading... ", products(), products?.loading);
	console.log("State... ", products(), products?.state);

	return (
		<div class="flex flex-wrap">
			<Show when={products()} fallback={<p>Loading...</p>}>
				<div class="flex flex-wrap w-full">
					<For each={products()}>
						{(product) => (
							<div class="w-1/3 p-2 ">
								<img class="" src={product.image.desktop} alt="img" />
								<div class="flex border justify-center">
									<AgregarAlCarrito />
								</div>
								<ul>
									<li>Categoria: {product.category}</li>
									<li>Nombre: {product.name}</li>
									<li>Precio: {product.price}</li>
								</ul>
							</div>
						)}
					</For>
				</div>
			</Show>
		</div>
	);
}
