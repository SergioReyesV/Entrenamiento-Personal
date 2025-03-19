import { createResource, For, Show } from "solid-js";
import { createAsync } from "@solidjs/router";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}
interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}
interface Geo {
	lat: string;
	lng: string;
}

const getPosts = async (): Promise<User[]> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	return await response.json();
};

const obternerUsuarios = async (): Promise<void> => {
	const res = await getPosts();

	const resultado = res.map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		companyName: user.company.name,
		city: user.address.city,
	}));
	console.log(resultado);
};

//obternerUsuarios();


export function ListaUsuarios(props: { userId: string }) {
  const [posts] = createResource(getPosts); // Obtenemos los usuarios asíncronamente

  // Filtrar los usuarios por ID
  const filteredUsers = () => {
    // Aquí manejamos el caso cuando posts() es undefined
    const users = posts() ?? []; // Si `posts()` es undefined, usamos un array vacío
    if (!props.userId) return users; // Si no hay ID, mostramos todos los usuarios
    const id = Number.parseInt(props.userId);
    return users.filter((user) => user.id === id); // Filtramos por ID
  };

  return (
    <div>
      <h1 class="text-3xl">Lista de Usuarios</h1>
      <ul>
        {/* Mostrar un mensaje de "Cargando..." si los datos no están disponibles */}
        <Show when={posts()} fallback={<li>Cargando...</li>}>
          {/* Si no se encuentran usuarios con ese ID, mostramos un mensaje */}
          <Show when={filteredUsers().length > 0} fallback={<li>No se encontró el usuario</li>}>
            <For each={filteredUsers()}>
              {(item) => (
                <li>
                  {item.id} - {item.name} - {item.email}
                </li>
              )}
            </For>
          </Show>
        </Show>
      </ul>
    </div>
  );
}
// export function ListaUsuarios() {
// 	const posts = createAsync(getPosts);

// 	return (
// 		<div>
// 			<h1 class="text-3xl">Lista de Usuarios</h1>
// 			<ul>
// 				<Show when={posts()} fallback={<li>Cargando...</li>}>
// 					<For each={posts()}>
// 						{(item) => (
// 							<li>
// 								{item.id} - {item.name} - {item.email}
// 							</li>
// 						)}
// 					</For>
// 				</Show>
// 			</ul>
// 		</div>
// 	);
// }
