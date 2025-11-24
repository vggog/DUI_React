import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./components/app/app.tsx";
import {Settings} from "./constants.ts";
import {offers} from "./mocks/offers.ts";
import {offersList} from "./mocks/offers-list.ts";
// import {offersListOld} from "./mocks/offers-list-old.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App
          rentalOffersCount={Settings.rentalOffersCount}
          offersList={offersList}
          offers={offers}
      />
  </StrictMode>,
)
