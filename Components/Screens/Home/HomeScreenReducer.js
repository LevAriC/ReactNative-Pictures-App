import { TOGGLE_VIEW, SEARCH_PICS } from './HomeScreenActionTypes'

const initialState = {
    view: 'Grid',
    picsList: [],
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
        default:
            return state
    }
}