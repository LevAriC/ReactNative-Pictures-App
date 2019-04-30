import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../Components/rootReducer'
import HomeScreenActions from '../../Components/Screens/Home/HomeScreenActions'
import HomeScreenReducer from '../../Components/Screens/Home/HomeScreenReducer'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

it('HomeScreen - Initial State', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().HomeScreen.view).toMatchSnapshot()
    expect(store.getState().HomeScreen.lastView).toMatchSnapshot()
    expect(store.getState().HomeScreen.picsList).toMatchSnapshot()
    expect(store.getState().HomeScreen.lastPicsList).toMatchSnapshot()
    expect(store.getState().HomeScreen.isLoading).toMatchSnapshot()
});

it('HomeScreen - Picture Search', () => {
  const store = createStore(rootReducer, initialState, composedEnhancers)
  store.dispatch(HomeScreenActions.updatePicsList({ Yoda: 'YES' }))
  expect(store.getState().HomeScreen.picsList).toHaveProperty('Yoda', 'YES')
  store.dispatch(HomeScreenActions.handleSaveLastPicsList(store.getState().HomeScreen.picsList))
  expect(store.getState().HomeScreen.lastPicsList).toHaveProperty('Yoda', 'YES')    
});

it('HomeScreen - Layout Toggle', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().HomeScreen.view).toMatchSnapshot()
    store.dispatch(HomeScreenActions.handleToggleView("List"))
    expect(store.getState().HomeScreen.view).toMatchSnapshot()
    store.dispatch(HomeScreenActions.handleToggleView("Grid"))
    expect(store.getState().HomeScreen.view).toMatchSnapshot()
    store.dispatch(HomeScreenActions.handleToggleView("Picture"))
    expect(store.getState().HomeScreen.view).toMatchSnapshot()
    store.dispatch(HomeScreenActions.handleSaveLastView("Picture"))
    expect(store.getState().HomeScreen.lastView).toMatchSnapshot()
});