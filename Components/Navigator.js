import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/Home/HomeScreen'
import FavoritesScreen from './Screens/Favorites/FavoritesScreen'
import PictureScreen from './Screens/Picture/PictureScreen'

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Favorites: { screen: FavoritesScreen },
    Picture: { screen: PictureScreen }
})

export default createAppContainer(AppNavigator)