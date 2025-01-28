import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-4oa7dw44fs2ol8zw.us.auth0.com"
    clientId="dvDKxcTGgsPVZUIj47vccfl6xzJwpk7x"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <BrowserRouter >
    <App />
    </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </StrictMode>,
)
