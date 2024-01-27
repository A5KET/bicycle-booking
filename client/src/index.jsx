import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import App from './App'
import BikeRepository from './repository'


const repository = new BikeRepository('http://localhost:3500')

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App repository={repository}/>
  </StrictMode>
)