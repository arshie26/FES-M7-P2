import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner, faMagnifyingGlass);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
