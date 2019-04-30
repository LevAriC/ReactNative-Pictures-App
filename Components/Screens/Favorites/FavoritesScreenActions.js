import { ADD_TO_FAVORITES, CHANGE_VIEW, SAVE_BIG_PIC } from './FavoritesScreenActionTypes'
import { AsyncStorage } from 'react-native'

const addToFavorites = (pic) => ({
    type: ADD_TO_FAVORITES,
    data: { pic }
})
const handleAddToFavorites = (pic) => async dispatch => {
    let bool = await isInFavorites(pic)
    if (!bool) {
        dispatch(addToFavorites(pic))
        await AsyncStorage.setItem(`${pic.id}`, JSON.stringify(pic))
    }
}

const isInFavorites = async (picToCheck) => {
    var bool = false
    await AsyncStorage.getItem(`${picToCheck.id}`, (err, result) => {
        if (result != null) bool = true
        else bool = false
    })
    return bool
}

const changeView = (view) => ({
    type: CHANGE_VIEW,
    data: { view }
})
const handleChangeView = (view) => async dispatch => {
    dispatch(changeView(view))
}

const saveBigPic = (pic) => ({
    type: SAVE_BIG_PIC,
    data: { pic }
})
const handleSaveBigPic = (pic) => async dispatch => {
    dispatch(saveBigPic(pic))
}

export default {
    addToFavorites,
    handleAddToFavorites,
    isInFavorites,
    changeView,
    handleChangeView,
    saveBigPic,
    handleSaveBigPic
}