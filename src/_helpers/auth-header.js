import { authenticationService } from '../_services';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser) {
        return { Authorization: localStorage.getItem('id_token') };
    } else {
        return {};
    }
}