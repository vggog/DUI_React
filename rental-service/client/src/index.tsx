import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./components/app/app.tsx";
import {Settings} from "./constants.ts";
import {offers} from "./mocks/offers.ts";
import {mapFullOffersToOffersList} from "./mocks/offers-list.ts";
import {reviews} from "./mocks/reviews.ts";
import {Provider} from "react-redux";
import {store} from "./store";
import {fetchOffersAction} from "./store/api-actions.ts";
import {ErrorMessage} from "./components/error-message";

store.dispatch(fetchOffersAction());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <ErrorMessage />
          <App
              rentalOffersCount={Settings.rentalOffersCount}
              offersList={mapFullOffersToOffersList(offers)}
              offers={offers}
              reviews={reviews}
          />
      </Provider>
  </StrictMode>,
)
