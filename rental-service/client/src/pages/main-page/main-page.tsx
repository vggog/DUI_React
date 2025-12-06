import {Logo} from "../../components/logo/logo.tsx";
import {CitiesCardList} from "../../components/cities-card-list/cities-card-list.tsx";
import type {OffersList} from "../../types/offer.ts";
import Map from "../../components/map/map.tsx";
import {CITIES_LOCATION} from "../../mocks/cities.ts";
import {useEffect, useState} from "react";
import type {City, Point} from "../../types/coordinates.ts";
import {CitiesList} from "../../components/cities-list/cities-list.component.tsx";
import {useAppSelector} from "../../hooks";
import {getOffersByCity, sortOffersByType} from "../../utils.ts";
import type {SortOffer} from "../../types/sort.ts";
import {SortOptions} from "../../components/sort-options/sort-options.component.tsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants.ts";


type MainPageProps = {
    rentalOffersCount: number,
    favoriteCount: number,
    offersList: OffersList[],
};

function MainPage({offersList, favoriteCount}: MainPageProps) {
    const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);
    const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

    const [city, setCity] = useState<City | null>(null);
    const [cityPoints, setCityPoints] = useState<Point[]>([])

    const selectedCity = useAppSelector((state) => state.city);
    const offersListSelector = useAppSelector((state) => state.offers);
    const selectedCityOffers = getOffersByCity(selectedCity?.title, offersListSelector);
    const rentalOffersCount = selectedCityOffers.length;

    const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

    useEffect(() => {
        const foundCity = CITIES_LOCATION.find((c: City) => c.title === selectedCity?.title);
        if (foundCity) {
            setCity(foundCity);
        }

        const cityPoints = offersList.filter(offer => offer.city.title === selectedCity.title).map((offer: OffersList) => offer.location);

        setCityPoints(cityPoints);
    }, [selectedCity]);

    useEffect(() => {
        if (!selectedOfferId) {
            setSelectedPoint(null);
            return;
        }

        const selectedOffer = offersList.find(
            (offer) => offer.id === selectedOfferId,
        );

        if (!selectedOffer) {
            setSelectedPoint(null);
            return;
        }

        setSelectedPoint(selectedOffer.location);
    }, [selectedOfferId, offersList]);

    return (
        <div className="page page--gray page--main">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo/>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <Link to={`${AppRoute.Favorites}`} className="header__nav-link header__nav-link--profile">
                                        <div>
                                            <span className="header__user-name user__name">Myemail@gmail.com</span>
                                            <span className="header__favorite-count">{favoriteCount}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <CitiesList selectedCity={selectedCity} />
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in {selectedCity.title}</b>
                            <SortOptions activeSorting={ activeSort } onChange={ (newSorting) => setActiveSort(newSorting) }/>
                            <CitiesCardList offersList={ sortOffersByType(selectedCityOffers, activeSort)} setSelectPoint={setSelectedOfferId}/>
                        </section>
                        <div className="cities__right-section">
                            <section className="cities__map map">
                                {city && cityPoints.length > 0 && (
                                    <Map
                                        city={city}
                                        points={cityPoints}
                                        selectedPoint={selectedPoint}
                                    />
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export { MainPage };
