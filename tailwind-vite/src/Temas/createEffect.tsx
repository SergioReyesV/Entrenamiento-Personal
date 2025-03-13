import { createSignal, createEffect, onMount } from 'solid-js';

export function EjemploEffect() {
  const [count, setCount] = createSignal(0);

  // Este efecto se ejecutará cada vez que 'count' cambie

  onMount(() => {
    console.log("hola", count())
  })


  createEffect(() => {
    const valor = count()
    if (valor > 5) {
        console.log("El valor de count ha cambiado a: " , count());
    }
    
  });

  return (
    <div>
      <p>Contador: {count()}</p>
      <button type='button' onClick={() => setCount(count() + 1)}>Incrementar</button>
    </div>
  );
}
