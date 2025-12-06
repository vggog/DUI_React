import { createAction } from '@reduxjs/toolkit';
import type {OffersList,} from '../types/offer';
import type {City} from "../types/coordinates.ts";

const changeCity = createAction('offers/changedity', (city: City) => ({
    payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
    payload: offers
}));

export { changeCity, offersCityList };