import { combineReducers } from 'redux'
import HomeScreenReducer from './Screens/Home/HomeScreenReducer'
import FavoritesScreenReducer from './Screens/Favorites/FavoritesScreenReducer'

export default combineReducers({
    HomeScreen: HomeScreenReducer,
    FavoritesScreen: FavoritesScreenReducer
})