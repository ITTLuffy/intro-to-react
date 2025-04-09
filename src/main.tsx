import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const elementoDOMDiMounting = document.getElementById('root');
const root = createRoot(elementoDOMDiMounting!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// logica di base di react
