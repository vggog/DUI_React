import { createAction } from '@reduxjs/toolkit';
import type {OffersList,} from '../types/offer';
import type {City} from "../types/coordinates.ts";
import type {AuthorizationStatusType} from '../types/authorization-status';
import type {UserData} from '../types/user-data';

const changeCity = createAction('offers/changedity', (city: City) => ({
    payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
    payload: offers
}));

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

const setUserData = createAction<UserData | null>('user/setUserData');

const setError = createAction<string | null>('setError');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export { changeCity, offersCityList, requireAuthorization, setUserData, setError, setOffersDataLoadingStatus };