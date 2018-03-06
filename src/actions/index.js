import { SELECT_FILM } from '../constants/action-types';

export const selectFilm = film => ({
    type: SELECT_FILM,
    payload: film
});