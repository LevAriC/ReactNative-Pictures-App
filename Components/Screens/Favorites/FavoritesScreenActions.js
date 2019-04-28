import { ADD_TO_FAVORITES, LOAD_FAVORITES_FROM_STORAGE } from './FavoritesScreenActionTypes'
// import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'

const addToFavorites = (pic) => ({
    type: ADD_TO_FAVORITES,
    data: { pic }
})

const loadFavoritesFromStorage = () => async dispatch => {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            // get at each store's key/value so you can work with it
            // let key = store[i][0]
            // let value = store[i][1]
            pic = JSON.parse(store[i][1])
            // dispatch(addToFavorites(pic))
            // console.log('ID: ')
            // console.log(pic.id)
            // console.log(isInFavorites(pic))
          })
        })
    })
}

const isInFavorites = (picToCheck) => async dispatch => {
    console.log(pic.id)
    // AsyncStorage.getAllKeys((err, keys) => {
    //     AsyncStorage.multiGet(keys, (err, stores) => {
    //       stores.map((result, i, store) => {
    //         // get at each store's key/value so you can work with it
    //         // let key = store[i][0]
    //         // let value = store[i][1]
    //         pic = JSON.parse(store[i][1])
    //         if (pic.id === picToCheck.id) return true
    //         // dispatch(addToFavorites(pic))
    //         // console.log('ID: ')
    //         // console.log(pic.id)
    //       })
    //     })
    //     return false
    // })
}

// const initFavoritesList = (pic) => ({
//     type: LOAD_FAVORITES_FROM_STORAGE,
//     data: { pic }
// })

const addToFavoritesStorage = (pic) => async dispatch => {
    // console.log('handleAddToFavorites')
    // console.log(pic)
    // dispatch(addToFavorites(pic))
    // storeData(pic)
    try {
        await AsyncStorage.setItem(`${pic.id}`, JSON.stringify(pic))
    } catch (e) {
        console.error(e)
    }
}

export default {
    addToFavoritesStorage,
    loadFavoritesFromStorage
}