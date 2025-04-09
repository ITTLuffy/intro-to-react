import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Importa il pacchetto react-dom/client --> funzione che permette di creare un root
import './index.css'
import App from './App.tsx'

const elementoDOMDiMounting = document.getElementById('root'); // Se non esiste l'elemento DOM, mostra un errore
const root = createRoot(elementoDOMDiMounting!); // Crea un root React e lo collega all'elemento DOM di mounting

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// logica di base di react


function MyButton() {
  return (
    <button>
      Click me!
    </button>
  )
}

root.render(
  <StrictMode>
    <MyButton />
  </StrictMode>,
)

function MyApp() {
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <p>This is my first React app</p>
      </div>
      <MyButton />
    </>
  )
}


MyButton.displayName = 'MyButton' // Imposta il nome del componente per il debug
// Il nome del componente viene visualizzato negli strumenti di sviluppo React
// Puoi anche usare un nome di funzione per il debug
