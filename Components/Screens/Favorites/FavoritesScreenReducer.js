import { ADD_TO_FAVORITES, CHANGE_VIEW, SAVE_BIG_PIC } from './FavoritesScreenActionTypes'

const initialState = {
    favoritesList: [],
    view: 'Grid',
    isLoading: true,
    bigPic: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.data.pic]
            }
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.data.view
            }
        case SAVE_BIG_PIC:
            return {
                ...state,
                bigPic: action.data.pic
            }
        default:
            return state
    }
}