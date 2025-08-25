import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <TrafficLightWithEffect />
   </StrictMode>,
)
