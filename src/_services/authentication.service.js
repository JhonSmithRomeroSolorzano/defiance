import { BehaviorSubject } from 'rxjs';
import jwt from 'jwt-decode';

import { handleResponse } from '../_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    logout,
    getTokensWithCode,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};


function getTokensWithCode (code) {
    let body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('client_id', process.env.REACT_APP_CLIENT_ID);
    body.set('code', code);
    body.set('redirect_uri', process.env.REACT_APP_REDIRECT_URI);

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Basic ' + btoa(environment['pool_app_client_id'] + ':' + environment['app_client_secret'])
            'Authorization': `Basic ` + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)
        },
        body: body.toString()
    };

    return fetch(`${process.env.REACT_APP_POOL_URL}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            var token_data_str = response;     //.text()
            var token_data = token_data_str //JSON.parse(token_data_str)
  
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem('id_token', token_data['id_token'])
            localStorage.setItem('access_token', token_data['access_token'])
            localStorage.setItem('refresh_token', token_data['refresh_token'])

            const decodedToken = jwt(token_data['id_token']);

            localStorage.setItem('username', decodedToken['cognito:username'])
            localStorage.setItem('email', decodedToken['email'])
            localStorage.setItem('uid', decodedToken['sub'])
            localStorage.setItem('currentUser', JSON.stringify(decodedToken))
            currentUserSubject.next(decodedToken);
            window.location = '/';

        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.clear();
    window.location = '/';
}
