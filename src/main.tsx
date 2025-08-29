import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ScrambleWords } from './useReducer/ScreambleWorlds'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <ScrambleWords />
   </StrictMode>,
)
