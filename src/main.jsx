import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { ToastContainer } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <ToastContainer />
      <App />
  </>
     
  
    
  
)
