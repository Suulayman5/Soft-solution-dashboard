import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App className='flex bg-[#f8f8ff] lg:h-[1922px] w-screen lg:top-[-189px] lg:left-[-124px]'/>
  </StrictMode>,
)
