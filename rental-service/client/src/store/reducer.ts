import { createReducer } from '@reduxjs/toolkit';
import { getCity } from '../utils';
import { changeCity, offersCityList, requireAuthorization, setUserData, setError, setOffersDataLoadingStatus } from './action';
import {CITIES_LOCATION} from "../mocks/cities.ts";
import {AuthorizationStatus} from '../constants';
import {OffersList} from "../types/offer.ts";
import type {UserData} from '../types/user-data';
// import type {OffersList} from "../types/offer.ts";

const defaultCity = getCity('Paris', CITIES_LOCATION);
// 2. Описываем структуру стейта
interface State {
    city: typeof defaultCity;
    offers: OffersList[]; // Теперь TS знает, что тут массив офферов
    authorizationStatus: string;
    user: UserData | null;
    error: string | null;
    isOffersDataLoading: boolean;
}

const initialState : State = {
    city: defaultCity,
    offers: [],
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
    error: null as string | null,
    isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(offersCityList, (state, action) => {
            state.offers = action.payload;
        })
        .addCase(requireAuthorization, (state, action) => {
            state.authorizationStatus = action.payload;
        })
        .addCase(setUserData, (state, action) => {
            state.user = action.payload;
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(setOffersDataLoadingStatus, (state, action) => {
            state.isOffersDataLoading = action.payload;
        });
});

export { reducer };
