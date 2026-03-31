import {Header} from "../../components/header/header.tsx";
import {FavoritesCardList} from "../../components/favorites-card-list/favorites-card-list.tsx";
import type {OffersList} from "../../types/offer.ts";
import {useEffect, useState} from "react";
import {fetchFavoritesAction} from "../../store/api-actions.ts";
import {useAppDispatch} from "../../hooks/index.ts";

function FavoritesPages() {
    const dispatch = useAppDispatch();
    const [favorites, setFavorites] = useState<OffersList[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchFavoritesAction())
            .unwrap()
            .then((data) => {
                setFavorites(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page">
            <Header favoriteCount={favorites.length} />

            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                        <FavoritesCardList offersList={favorites} />
                    </section>
                </div>
            </main>
            <footer className="footer container">
                <a className="footer__logo-link" href="main.html">
                    <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33"/>
                </a>
            </footer>
        </div>
    )
}

export {FavoritesPages};