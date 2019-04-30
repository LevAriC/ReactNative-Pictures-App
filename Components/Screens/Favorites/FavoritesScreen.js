import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions  } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FavoritesScreenActions from './FavoritesScreenActions'
import ImageView from 'react-native-image-view'


const mapStateToProps = ({ FavoritesScreen }) => {
    return {
        favoritesList: FavoritesScreen.favoritesList,
        view: FavoritesScreen.view,
        isLoading: FavoritesScreen.isLoading,
        bigPic: FavoritesScreen.bigPic
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FavoritesScreenActions: bindActionCreators(FavoritesScreenActions, dispatch)
    }
}

export class FavoritesScreen extends Component {

    constructor(props) {
        super(props)
        this.renderFavoritesList = this.renderFavoritesList.bind(this)
        this.renderGridPic = this.renderGridPic.bind(this)
        this.renderSinglePicView = this.renderSinglePicView.bind(this)
        this.gridKeyExtractor = this.gridKeyExtractor.bind(this)
    }

    static navigationOptions = () => ({
        title: 'Favorites',
        headerTitleStyle: {
            fontFamily: 'AppleSDGothicNeo-Light',
            fontSize: 18
        },
        headerStyle: {
            height: 70,
        }
    })

    gridKeyExtractor(item) {
        return item.id.toString()
    }

    renderGridPic({item}) {
        const { handleChangeView, handleSaveBigPic } = this.props.FavoritesScreenActions
        return (
            <TouchableOpacity 
            onPress={() =>  {
                handleSaveBigPic(item)
                handleChangeView('Picture')
            }}
            style={{ flex: 1, flexDirection: 'column', margin: 1 }}
            >
                <Image style={styles.imageThumbnail} source={{ uri: item.previewURL }} />
            </TouchableOpacity>
        )
    }

    renderSinglePicView() {
        const { bigPic } = this.props
        const { handleChangeView } = this.props.FavoritesScreenActions
        const { width, height } = Dimensions.get('window');
        const images = [
            {
                source: { uri: bigPic.largeImageURL},
                width: width,
                height: height -200,
            }
        ]

        return(
            <ImageView
                images={images}
                imageIndex={0}
                onClose={() => handleChangeView('Grid')}
                animationType={'slide'}
                isSwipeCloseEnabled={false}
            />
        )
    }

    renderFavoritesList() {
        const { favoritesList } = this.props
        return(
            <View>
                {
                    favoritesList.length == 0 ? 
                    (
                        <Text>No Results Were Found</Text>
                    ) 
                    : 
                    (
                        <FlatList
                        data={favoritesList}
                        renderItem={this.renderGridPic}
                        numColumns={3}
                        keyExtractor={this.gridKeyExtractor}
                        />
                    )
                }
            </View>
        )
    }

    render() {
        const { view } = this.props
        return view === 'Grid' ? this.renderFavoritesList() : this.renderSinglePicView()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen)

const styles = StyleSheet.create({
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    listPhoto: {
        height: 50,
        width: 50,
    },
    listTextContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    listTitle: {
        fontSize: 16,
        color: '#000',
    },
});