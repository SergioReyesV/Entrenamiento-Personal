import { For, Show, createSignal } from "solid-js";
import type { Producto } from "../App";
import "../App.css";

interface ProductoConCantidad extends Producto {
	cantidad: number;
}

interface PropsCarrito {
	carrito: ProductoConCantidad[];
	removeProduct: (id: number) => void;
}

export function CarritoCompras(props: PropsCarrito) {
	const [showModal, setShowModal] = createSignal(false); // Estado para el modal

	const total = () =>
		props.carrito.reduce(
			(acc, product) => acc + product.price * product.cantidad,
			0,
		);

	const handleRemoveProduct = (id: number) => {
		props.removeProduct(id);
	};

	const handleConfirmPurchase = () => {
		// Aquí puedes agregar la lógica para confirmar la compra y limpiar el carrito, si lo deseas
		console.log("Compra confirmada");
		// biome-ignore lint/complexity/noForEach: <explanation>
		props.carrito.forEach((product) => {
			props.removeProduct(product.id); // Eliminar productos del carrito
		});
		setShowModal(false); // Cerrar el modal después de confirmar
	};

	return (
		<div class="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
			<Show
				when={
					props.carrito.length > 0 &&
					props.carrito.some((product) => product.cantidad > 0)
				}
				fallback={
					<div class="flex flex-col items-center justify-center text-gray-500 py-10">
						<img
							src="src\assets\images\illustration-empty-cart.svg"
							alt="Empty Cart"
							class="w-32 h-32"
						/>
						<p class="mt-4 text-lg font-medium">Your added items will be appear here</p>
					</div>
				}
			>
				<div class="space-y-5">
					<ul class="divide-y divide-gray-300">
						<For each={props.carrito}>
							{(product) => (
								<li class="flex justify-between items-center py-4">
									<div>
										<p class="text-lg font-semibold text-gray-800">
											{product.name}
										</p>
										<p class="text-gray-500">{product.price}$</p>
										<p class="text-sm text-gray-600">
											Cantidad: {product.cantidad}
										</p>
									</div>
									<button
										type="button"
										class="text-red-500 hover:text-red-700 font-medium"
										onClick={() => handleRemoveProduct(product.id)}
									>
										Eliminar
									</button>
								</li>
							)}
						</For>
					</ul>
					<div class="bg-rose-100 p-4 rounded-lg text-center shadow-sm border border-rose-300">
						<p class="text-xl font-bold text-gray-900">Total: {total()}$</p>
					</div>
					<div class="flex justify-center">
						<button
							type="button"
							class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
							onClick={() => setShowModal(true)}
						>
							Confirmar Compra
						</button>
					</div>
				</div>
			</Show>

			{/* Modal de confirmación */}
			<Show when={showModal()}>
				<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
					<div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
						<h2 class="text-2xl font-semibold text-center mb-4">
							Confirmar Compra
						</h2>
						<ul class="divide-y divide-gray-300 mb-4">
							<For each={props.carrito}>
								{(product) => (
									<li class="py-2">
										<p class="text-lg font-semibold text-gray-800">
											{product.name}
										</p>
										<p class="text-gray-500">{product.price}$</p>
										<p class="text-sm text-gray-600">
											Cantidad: {product.cantidad}
										</p>
									</li>
								)}
							</For>
						</ul>
						<div class="flex justify-between">
							<button
								type="button"
								class="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
								onClick={() => setShowModal(false)}
							>
								Cancelar
							</button>
							<button
								type="button"
								class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
								onClick={handleConfirmPurchase}
							>
								Confirmar
							</button>
						</div>
					</div>
				</div>
			</Show>
		</div>
	);
}
