import { TOGGLE_VIEW, SEARCH_PICS, SAVE_LAST_VIEW, UPDATE_LOADING, SAVE_LAST_LIST } from './HomeScreenActionTypes'

const toggleView = (view) => ({
    type: TOGGLE_VIEW,
    data: { view }
})
const handleToggleView = (view) => async dispatch => {
    dispatch(toggleView(view))
}

const saveLastPicsList = (picsList) => ({
    type: SAVE_LAST_LIST,
    data: { picsList }
})
const handleSaveLastPicsList = (picsList) => async dispatch => {
    dispatch(saveLastPicsList(picsList))
}

const updateIsLoading = (isLoading) => ({
    type: UPDATE_LOADING,
    data: { isLoading }
})
const handleUpdateIsLoading = (isLoading) => async dispatch => {
    dispatch(updateIsLoading(isLoading))
}

const saveLastView = (view) => ({
    type: SAVE_LAST_VIEW,
    data: { view }
})
const handleSaveLastView = (view) => async dispatch => {
    dispatch(saveLastView(view))
}

const updatePicsList = (picList) => ({
    type: SEARCH_PICS,
    data: { picList }
})
const handlePicsSearch = (searchQuery) => async dispatch => {
    const pixabayKey = '12263176-901abf3c360dd1fbe2da948f7'
    const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${searchQuery}&image_type=photo&per_page=198`
    const options = { method: 'GET', headers: { 'Content-Type': 'application/json', 'Accept':'application/json' } }
    const request = new Request(url, options)

    await fetch(request)
    .then(response => response.json())
    .then(async data => dispatch(updatePicsList(data.hits)))
    .catch(err => console.log('Fetch Error: ' + err))
}

export default {
    handlePicsSearch,
    handleToggleView,
    updatePicsList,
    toggleView,
    saveLastView,
    handleSaveLastView,
    updateIsLoading,
    handleUpdateIsLoading,
    saveLastPicsList,
    handleSaveLastPicsList
}