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
      <div class="min-h-screen bg-gray-50 flex flex-col">
        <main class="flex flex-1 p-4 sm:p-6 md:p-8 lg:p-12 space-x-6 flex-wrap">
          <div class="flex-1 bg-rose-50 rounded-lg shadow-md p-6 border">
            <h2 class="text-2xl md:text-4xl font-default text-gray-800 mb-4">Desserts</h2>
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
          <div class="w-full sm:w-1/3 md:w-1/4 bg-rose-50 rounded-lg shadow-md p-6 border mt-6 sm:mt-0">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Carrito de Compras</h2>
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
