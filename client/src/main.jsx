import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,} from "react-router-dom";
import './App.css'
import ContextProvider from './context/context.jsx';
import CartContextProvider from './Users/CartContext/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ContextProvider>
    <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </CartContextProvider>
    </ContextProvider>
  </React.StrictMode>,
)
