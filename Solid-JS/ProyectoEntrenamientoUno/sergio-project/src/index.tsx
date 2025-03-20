import { Router } from 'solid-app-router';
import App from './App';
import { render } from 'solid-js/web';

const rootElement = document.getElementById('root') as HTMLElement;

const Root = () => (
  <Router>
    <App />
  </Router>
);

rootElement && render(Root, rootElement);
