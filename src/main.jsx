import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { DataProvider } from './Context/DataContext.jsx'
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById('root')).render(
     <Provider store={store}>
  <DataProvider>

  <StrictMode>
  <HelmetProvider> 
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </HelmetProvider>
  </StrictMode>
  </DataProvider>
  </Provider>
)
