import { ADD_TO_FAVORITES } from './FavoritesScreenActionTypes'

const initialState = {
    favoritesList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.data.pic]
            }
        default:
            return state
    }
}