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
    expect(store.getState().HomeScreen.view).toMatchSnapshot();
    expect(store.getState().HomeScreen.searchQuery).toMatchSnapshot();
});

it('HomeScreen - Picture Search', () => {
  const store = createStore(rootReducer, initialState, composedEnhancers)
  expect(store.getState().HomeScreen.view).toMatchSnapshot();
  expect(store.getState().HomeScreen.searchQuery).toMatchSnapshot();
  store.dispatch(HomeScreenActions.updatePicsList({ Yoda: 'YES' }))
  expect(store.getState().HomeScreen.picsList).toHaveProperty('Yoda', 'YES')
});

it('HomeScreen - Layout Toggle', () => {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().HomeScreen.view).toMatchSnapshot();
    store.dispatch(HomeScreenActions.handleToggleView())
    expect(store.getState().HomeScreen.view).toMatchSnapshot();
    store.dispatch(HomeScreenActions.handleToggleView())
    expect(store.getState().HomeScreen.view).toMatchSnapshot();
});