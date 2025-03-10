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

function guardar(event: SubmitEvent ) {
    event.preventDefault();
    console.log(form());
}

  // createEffect(() => {
  //   console.log(form());
  // })

  return (
    <div class={styles.App}>
        <h4>Bienvenido</h4>
        <form action="" onSubmit={guardar}>
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
          <input type="text" value={form()?.direccion} onInput={(e)=>setForm((valor)=>({...valor, direccion: e.target.value}))}/>
          <h5>Email</h5>
          <input type="email" value={form()?.email} onInput={(e)=>setForm((valor)=>({...valor, email: e.target.value}))}/>
          <br /><br />
          <button type="submit">Guardar Informacion</button>
        </form>
    </div>
  );
};

export default App;