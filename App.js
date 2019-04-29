import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import AppNavigtor from './Components/Navigator'
import Store from './Components/Store'
// commit check
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigtor />
      </Provider>
    )
  }
}

AppRegistry.registerComponent("ImageBrowserApp", () => App);
