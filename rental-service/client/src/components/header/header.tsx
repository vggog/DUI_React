import {Logo} from "../logo/logo.tsx";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../constants.ts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {logoutAction, fetchFavoritesAction} from "../../store/api-actions.ts";
import {useEffect, useState} from "react";

type HeaderProps = {
    favoriteCount?: number;
};

function Header({favoriteCount}: HeaderProps) {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [realFavoriteCount, setRealFavoriteCount] = useState(favoriteCount);

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(logoutAction());
    };

    const isAuth = authorizationStatus === AuthorizationStatus.Auth;

    useEffect(() => {
        if (isAuth && favoriteCount === undefined) {
            dispatch(fetchFavoritesAction())
                .unwrap()
                .then((data) => {
                    setRealFavoriteCount(data.length);
                })
                .catch(() => {
                    setRealFavoriteCount(0);
                });
        } else if (favoriteCount !== undefined) {
            setRealFavoriteCount(favoriteCount);
        }
    }, [isAuth, favoriteCount, dispatch]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <Logo/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            {isAuth ? (
                                <>
                                    <li className="header__nav-item user">
                                        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                                            <div className="header__avatar-wrapper user__avatar-wrapper">
                                                {user?.avatarUrl && (
                                                    <img src={user.avatarUrl} alt="User avatar" style={{width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover'}} />
                                                )}
                                            </div>
                                            <span className="header__user-name user__name">{user?.email}</span>
                                            {(realFavoriteCount ?? 0) > 0 && (
                                                <span className="header__favorite-count">{realFavoriteCount}</span>
                                            )}
                                        </Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#" onClick={handleLogout}>
                                            <span className="header__signout">Sign out</span>
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li className="header__nav-item user">
                                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                                        <div className="header__avatar-wrapper user__avatar-wrapper">
                                        </div>
                                        <span className="header__login">Sign in</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export {Header};
