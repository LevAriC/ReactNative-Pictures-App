import { TOGGLE_VIEW, SEARCH_PICS, UPDATE_SEARCH_QUERY, SAVE_LAST_VIEW, UPDATE_LOADING } from './HomeScreenActionTypes'

const initialState = {
    view: 'Grid',
    lastView: '',
    picsList: [],
    searchQuery: '',
    isLoading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PICS:
            return {
                ...state,
                picsList: action.data.picList
            }
        case TOGGLE_VIEW:
            return {
                ...state,
                view: action.data.view
            }
        case UPDATE_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.data.searchQuery
            }   
        case SAVE_LAST_VIEW:
            return {
                ...state,
                lastView: action.data.view
            }
        case UPDATE_LOADING:
            return {
                ...state,
                isLoading: action.data.isLoading
            }   
        default:
            return state
    }
}