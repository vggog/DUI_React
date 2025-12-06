import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import type {City} from "../../types/coordinates.ts";
import {CITIES_LOCATION} from "../../mocks/cities.ts";
import {AppRoute} from "../../constants.ts";
import {changeCity} from "../../store/action.ts";


type CitiesListProps = {
    selectedCity: City | undefined;
};

function CitiesList({ selectedCity }: CitiesListProps) {
    const dispatch = useAppDispatch();

    return (
        <ul className="locations__list tabs__list">
            {CITIES_LOCATION.map((city) => (
                <li key={city.title} className="locations__item" onClick={() => dispatch(changeCity(city))}>
                    <Link
                        className={`${city.title === selectedCity?.title ? 'tabs_item--active' : 'tabs_item--disable'} locations__item-link tabs__item`}
                        to={AppRoute.Main}
                    >
                        <span>{city.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export { CitiesList };