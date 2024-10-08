import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import './assets/css/template.css'
import {RouterProvider} from "react-router-dom";
import router from "./assets/routes/router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
