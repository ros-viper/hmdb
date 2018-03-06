import { SELECT_FILM } from "../constants/action-types";

const initialState = {
    films: [
        {name: 'Robocop', description: 'Robocop Desc', rating: 5, id: 1, image: null},
        {name: 'Terminator 1', description: 'Term 1 Desc', rating: 4, id: 2, image: null},
        {name: 'Terminator 2', description: 'Term 2 Desc', rating: 4, id: 3, image: null},
        {name: 'Terminator 3', description: 'Term 3 Desc', rating: 2, id: 4, image: null}
      ],
      selectedFilm: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_FILM:
            const newState = Object.assign({}, state);
            newState.selectedFilm = action.payload;
            return newState;
        default:
            return state;
    }
};

export default rootReducer;