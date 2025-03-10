import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';


function App() {
  const [form, setForm] = createSignal({
    
  });

  return (
    <div class={styles.App}>
        <h4>Bienvenido</h4>
        <form action="">
          <h5>Nombre</h5>
          <input type="text" value={form().nombre} />
          <h5>Edad</h5>
          <input type="text" />
          <h5>Telefono</h5>
          <input type="text" />
          <h5>Direccion</h5>
          <input type="text" />
          <h5>Email</h5>
          <input type="email" />
        </form>
    </div>
  );
}


// function App() {
//   return (
//     <div class={styles.App}>
//       <header class={styles.header}>
//         <img src={logo} class={styles.logo} alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <a
//           class={styles.link}
//           href="https://github.com/solidjs/solid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Solid
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
