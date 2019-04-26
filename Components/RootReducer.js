import { combineReducers } from 'redux'
import HomeScreenReducer from './Screens/Home/HomeScreenReducer'
// import PictureScreenReducer from './Components/PictureScreen/PictureScreenReducer'
// import FavoritesReducer from './Components/Favorites/FavoritesReducer'

export default combineReducers({
    HomeScreen: HomeScreenReducer,
    // PictureScreen: PictureScreenReducer,
    // Favorites: FavoritesReducer
})