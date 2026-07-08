import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("BACKEND URL:", import.meta.env.VITE_BACKEND_URL);
console.log("ENV:", import.meta.env);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)