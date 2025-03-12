import { MyComponent } from "./components/componente1";
import { Componente2 } from "./components/componente2";

function App() {  
	return (
		<div>
			<h1 class="border p-2 m-2">
				Componente 1<MyComponent/>
			</h1>
      <h1 class="border p-2 m-2">
        Componente 2 <Componente2/>
      </h1>
		</div>
	);
}

export default App;
