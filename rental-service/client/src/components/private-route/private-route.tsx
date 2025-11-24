import {AppRoute, AuthorizationStatus} from "../../constants.ts";
import type {PropsWithChildren} from "react";
import {Navigate} from "react-router-dom";

type AuthorizationStatusEnum = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatusEnum,
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>) {
    const {authorizationStatus, children} = props;

    return (
        authorizationStatus === AuthorizationStatus.Auth
            ? children
            : <Navigate to={ AppRoute.Login } />
    )
}

export {PrivateRoute};
