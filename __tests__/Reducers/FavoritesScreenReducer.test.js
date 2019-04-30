import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../Components/rootReducer'
import FavoritesScreenActions from '../../Components/Screens/Favorites/FavoritesScreenActions'
import FavoritesScreenReducer from '../../Components/Screens/Favorites/FavoritesScreenReducer'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

it('FavoritesScreen - Initial State', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().FavoritesScreen.favoritesList).toMatchSnapshot()
    expect(store.getState().FavoritesScreen.view).toMatchSnapshot()
    expect(store.getState().FavoritesScreen.isLoading).toMatchSnapshot()
    expect(store.getState().FavoritesScreen.bigPic).toMatchSnapshot()
});

it('FavoritesScreen - Adding To Favs', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    store.dispatch(FavoritesScreenActions.addToFavorites({pic: 'surf'}))
    expect(store.getState().FavoritesScreen.favoritesList).toHaveLength(1)
    expect(store.getState().FavoritesScreen.favoritesList[0]).toEqual({pic: 'surf'})
    store.dispatch(FavoritesScreenActions.saveBigPic({pic: 'surf'}))
    expect(store.getState().FavoritesScreen.bigPic).toEqual({pic: 'surf'})
});

it('HomeScreen - Change View', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().FavoritesScreen.view).toMatchSnapshot()
    store.dispatch(FavoritesScreenActions.handleChangeView("List"))
    expect(store.getState().FavoritesScreen.view).toMatchSnapshot()
    store.dispatch(FavoritesScreenActions.handleChangeView("Picture"))
    expect(store.getState().FavoritesScreen.view).toMatchSnapshot()    
});
