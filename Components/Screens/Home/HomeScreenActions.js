import { TOGGLE_VIEW, SEARCH_PICS } from './HomeScreenActionTypes'

const toggleView = (view) => ({
    type: TOGGLE_VIEW,
    data: { view }
})
const handleToggleView = (view) => async dispatch => {
    dispatch(toggleView(view))
}

const updatePicsList = (picList) => ({
    type: SEARCH_PICS,
    data: { picList }
})
const handlePicsSearch = (searchQuery) => async dispatch => {
    const pixabayKey = '12263176-901abf3c360dd1fbe2da948f7'
    const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${searchQuery}&image_type=photo&per_page=199`
    const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    const request = new Request(url, options)
    console.log(request)

    await fetch(request)
    .then(response => response.json())
    .then(async data => dispatch(updatePicsList(data.hits)))
    .catch(err => console.log(err))
}

export default {
    handlePicsSearch,
    handleToggleView,
    updatePicsList,
    toggleView
}