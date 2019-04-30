import { TOGGLE_VIEW, SEARCH_PICS, SAVE_LAST_VIEW, UPDATE_LOADING, SAVE_LAST_LIST } from './HomeScreenActionTypes'

const initialState = {
    view: 'Grid',
    lastView: '',
    picsList: [],
    lastPicsList: [],
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
        case SAVE_LAST_LIST:
            return {
                ...state,
                lastPicsList: action.data.picsList
            }  
        default:
            return state
    }
}