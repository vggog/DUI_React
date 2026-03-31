import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { FullOffer, OffersList } from '../types/offer';
import {offersCityList, requireAuthorization, setUserData, setError, setOffersDataLoadingStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../constants';
import {AuthData, UserData} from '../types/user-data';
import {store} from './index';
import type {ReviewType} from '../types/reviews';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OffersList[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(offersCityList(data));
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<{id: number; email: string; avatarUrl?: string}>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData({
        id: data.id,
        email: data.email,
        token: '', // Токен уже в localStorage
        avatarUrl: data.avatarUrl
      }));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserData(null));
    }
  },
);

const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      return data;
    } catch (err) {
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserData(null));
      return rejectWithValue('Login failed');
    }
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  },
);

const fetchOfferByIdAction = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

const fetchReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

type AddReviewData = {
  offerId: string;
  comment: string;
  rating: number;
};

const addReviewAction = createAsyncThunk<ReviewType, AddReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addReview',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<ReviewType>(`${APIRoute.Comments}/${offerId}`, {
      comment,
      rating,
    });
    return data;
  },
);

const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

const toggleFavoriteAction = createAsyncThunk<{isFavorite: boolean}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/toggleFavorite',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<{isFavorite: boolean}>(`${APIRoute.Favorites}/${offerId}`);
    return data;
  },
);

const fetchFavoritesAction = createAsyncThunk<OffersList[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersList[]>(APIRoute.Favorites);
    return data;
  },
);

export {fetchOffersAction, fetchOfferByIdAction, fetchReviewsAction, addReviewAction, checkAuthAction, loginAction, logoutAction, clearErrorAction, toggleFavoriteAction, fetchFavoritesAction};
