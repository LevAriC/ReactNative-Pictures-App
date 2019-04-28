import { combineReducers } from 'redux'
import HomeScreenReducer from './Screens/Home/HomeScreenReducer'
import FavoritesScreenReducer from './Screens/Favorites/FavoritesScreenReducer'
// import PictureScreenReducer from './Components/PictureScreen/PictureScreenReducer'

export default combineReducers({
    HomeScreen: HomeScreenReducer,
    FavoritesScreen: FavoritesScreenReducer
    // PictureScreen: PictureScreenReducer,
})