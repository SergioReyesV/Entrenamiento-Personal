import "./App.css";
import { AgregarAlCarrito } from "./components/boton-agregar";
import { MostrarProductos } from "./components/lista-productos";

function App() {
	return (
		<>
			<div class="" >Principal
				<div class="mr-20 ml-20 mt-6 flex text-center flex-col bg-rose-50">
					Box secundaria
					<div class=" flex flex-wrap justify-between">
						<div class="w-full md:w-2/3 p-2 text-start">
							<div class=" text-start text-3xl">Productos</div>
							<MostrarProductos />
						</div>
						<div class="w-full md:w-1/3 p-2 border">
							<div class="border mt-10">Carrito</div>
              <div class="border mt-10">Lista carrito Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur ipsam voluptatem animi? Harum ab enim inventore, commodi magnam veritatis nobis perferendis. Nisi quisquam numquam fugiat voluptate nobis nesciunt esse.</div>
            </div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
