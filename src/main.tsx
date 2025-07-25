import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

(function() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const path = params.get('p');

  if (path) {
    window.history.replaceState(null, '', path);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
