import { authHeader } from '../_helpers';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${process.env.REACT_APP_API_URL}agency`, requestOptions);
}