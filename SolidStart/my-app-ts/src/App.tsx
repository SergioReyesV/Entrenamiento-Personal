import { createEffect, createSignal, type Component } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {

type MyForm = {
    nombre: string,
    edad: string,
    telefono: string,
    direccion: string,
    email: string
  };

  const [form, setForm] = createSignal<MyForm>({
    nombre: '',
    edad: '',
    telefono: '',
    direccion: '',
    email: ''
  });

  createEffect(() => {
    console.log(form());
  })

  return (
    <div class={styles.App}>
        <h4>Bienvenido</h4>
        <form action="">
          <h5>Nombre</h5>
          <input type="text" value={form()?.nombre} onInput={(e) => setForm((valor) => ({...valor, nombre: e.target.value}))}/>
          <h5>Edad</h5>
          <input type="text" value={form()?.edad} onInput={(e)=> setForm((valor)=>({...valor,edad: e.target.value}))}/>
          <h5>Telefono</h5>
          <input type="text" value={form()?.telefono} onInput={(e) => 
            setForm((valor) => {
              const newValue = {...valor};
              return {...newValue, telefono: e.target.value.toUpperCase()}
            })} />
          <h5>Direccion</h5>
          <input type="text" value={form()?.direccion} />
          <h5>Email</h5>
          <input type="email" value={form()?.email} />
        </form>
    </div>

    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;