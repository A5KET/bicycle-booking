import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import App from './App'
import BikeService from './services.js'


const bikeService = new BikeService('http://localhost:3500/bikes')

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App service={bikeService}/>
  </StrictMode>
)