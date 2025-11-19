import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./components/app/app.tsx";
import {Settings} from "./constants.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App rentalOffersCount={Settings.rentalOffersCount}/>
  </StrictMode>,
)
