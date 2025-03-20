import { Router } from 'solid-app-router';
import App from './App';
import { render } from 'solid-js/web';

// Encuentra el contenedor raíz
const rootElement = document.getElementById('root') as HTMLElement;

// Crea la función raíz que envuelve tu App en el Router
const Root = () => (
  <Router>
    <App />
  </Router>
);

// Renderiza el componente en el contenedor
rootElement && render(Root, rootElement);
