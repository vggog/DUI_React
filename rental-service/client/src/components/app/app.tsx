import {MainPage} from "../../pages/main-page/main-page.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../constants.ts";
import {LoginPages} from "../../pages/login-page/login-pages.tsx";
import {FavoritesPages} from "../../pages/favorites-page/favorites-pages.tsx";
import {OfferPage} from "../../pages/offer-page/offer-page.tsx";
import {NotFound} from "../not-found/not-found.tsx";
import {PrivateRoute} from "../private-route/private-route.tsx";
import type {FullOffer, OffersList} from "../../types/offer.ts";
import type {ReviewType} from "../../types/reviews.ts";

type AppMainPageProps = {
    rentalOffersCount: number,
    offersList: OffersList[],
    offers: FullOffer[],
    reviews:ReviewType[];
};

function App({rentalOffersCount, offersList, offers, reviews} : AppMainPageProps) {
    const favoritiesOffersCount = offersList.filter((offer) => offer.isFavorite).length;

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage
                        rentalOffersCount={rentalOffersCount}
                        offersList={offersList}
                        favoriteCount={favoritiesOffersCount}
                    />}
                />
                <Route path={AppRoute.Login} element={<LoginPages />} />
                <Route
                    path={ `${AppRoute.Offers}/:id` }
                    element={<OfferPage
                        offers={offers}
                        reviews={reviews}
                        favoriteCount={favoritiesOffersCount}
                    />}
                />
                <Route path="*" element={<NotFound />}/>

                <Route path={AppRoute.Favorites} element={
                    <PrivateRoute authorizationStatus= { AuthorizationStatus.Auth }>
                        <FavoritesPages
                            offersList={offersList}
                            favoriteCount={favoritiesOffersCount}
                        />
                    </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export {App};
