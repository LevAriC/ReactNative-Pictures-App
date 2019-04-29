import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/Home/HomeScreen'
import FavoritesScreen from './Screens/Favorites/FavoritesScreen'

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Favorites: { screen: FavoritesScreen }
})

export default createAppContainer(AppNavigator)