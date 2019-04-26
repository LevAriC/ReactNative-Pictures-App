import { ADD_TO_FAVORITES } from './FavoritesScreenActionTypes'

const addToFavorites = (pic) => ({
    type: ADD_TO_FAVORITES,
    data: { pic }
})

const handleAddToFavorites = (pic) => async dispatch => {
    console.log('handleAddToFavorites')
    dispatch(addToFavorites(pic))
}

export default {
    handleAddToFavorites,
    addToFavorites
}