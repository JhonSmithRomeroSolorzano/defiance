import React from 'react';
import { Route} from 'react-router-dom';

import { authenticationService } from '../_services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            window.location.href = process.env.REACT_APP_SIGNIN;
        }
        return <Component {...props} />
    }} />
)