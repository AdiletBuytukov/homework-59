import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Joke from "./Joke";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root1')!).render(
  <React.StrictMode>
    <Joke />
  </React.StrictMode>,
)