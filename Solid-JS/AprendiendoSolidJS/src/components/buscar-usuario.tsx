// BuscadorUsuario.tsx
import { createSignal } from "solid-js";

// Definimos las propiedades que recibe el componente (en este caso, una función setUserId)
export function BuscadorUsuario(props: { setUserId: (id: string) => void }) {
  const [id, setId] = createSignal(""); // Estado local para manejar el valor del input

  // Función para manejar los cambios en el input
  const handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setId(target.value); // Actualiza el valor local
    props.setUserId(target.value); // Actualiza el valor en el componente padre
  };

  return (
    <div class="ml-20 mt-5">
      <input
        class="border p-2"
        type="text"
        placeholder="Buscar por ID"
        value={id()}
        onInput={handleInputChange} // Se llama a la función cuando el valor cambia
      />
    </div>
  );
}
