import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Homepage from './Auth/signup'
import Homepage from './Homepage/homepage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
