import { For, Show, createSignal } from "solid-js";
import type { Producto } from "../App";
import "../index.css";

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
      0
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
    <div class="p-4 bg-white shadow-md rounded-lg border">
      <Show
        when={
          props.carrito.length > 0 && props.carrito.some((product) => product.cantidad > 0)
        }
        fallback={
          <div class="empty-cart-container">
            <div class="empty-cart-content">
              <div class="empty-cart-image" />
              <p class="text-center text-gray-600 mt-4">Your added items will appear here</p>
            </div>
          </div>
        }
      >
        <div class="space-y-4">
          <ul class="space-y-3">
            <For each={props.carrito}>
              {(product) => (
                <li class="p-4 border-b flex justify-between items-center">
                  <div class="flex-1">
                    <p class="font-semibold text-lg">{product.name}</p>
                    <p class="text-gray-500">{product.price}$</p>
                    <p class="text-sm text-gray-600">Cantidad: {product.cantidad}</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <button
                      type="button"
                      class="text-red-600 hover:text-red-800"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              )}
            </For>
          </ul>
          <div class="mt-4 p-3 bg-rose-50 text-center rounded-md shadow-md border">
            <p class="font-bold text-xl md:text-2xl">Total: {total()}$</p>
          </div>
          {/* Botón para confirmar la compra */}
          <div class="text-center mt-4">
            <button type="button"
              class="bg-blue-600 text-white p-2 rounded-md"
              onClick={() => setShowModal(true)} // Mostrar el modal
            >
              Confirmar Compra
            </button>
          </div>
        </div>
      </Show>

      {/* Modal de confirmación */}
      <Show when={showModal()}>
  <div class="fixed inset-0 shadow-lg flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 class="text-2xl font-semibold text-center mb-4">Confirmar Compra</h2>
      <ul class="space-y-3 mb-4">
        <For each={props.carrito}>
          {(product) => (
            <li class="flex justify-between items-center">
              <div class="flex-1">
                <p class="font-semibold text-lg">{product.name}</p>
                <p class="text-gray-500">{product.price}$</p>
                <p class="text-sm text-gray-600">Cantidad: {product.cantidad}</p>
              </div>
            </li>
          )}
        </For>
      </ul>
      <div class="flex justify-between">
        <button type="button"
          class="bg-gray-300 text-gray-800 p-2 rounded-md"
          onClick={() => setShowModal(false)} // Cerrar el modal
        >
          Cancelar
        </button>
        <button type="button"
          class="bg-green-600 text-white p-2 rounded-md"
          onClick={handleConfirmPurchase} // Confirmar compra
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
