import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, Alert  } from 'react-native'
import { Header, Button, Icon, SearchBar, ButtonGroup  } from 'react-native-elements'
import ImageView from 'react-native-image-view'

export default class PicsList extends Component {

    constructor(props) {
        super(props)
        this.gridKeyExtractor = this.gridKeyExtractor.bind(this)
        this.listKeyExtractor = this.listKeyExtractor.bind(this)
        this.renderGridPic = this.renderGridPic.bind(this)
        this.renderGridView = this.renderGridView.bind(this)
        this.renderListPic = this.renderListPic.bind(this)
        this.renderListView = this.renderListView.bind(this)
        this.renderSinglePicView = this.renderSinglePicView.bind(this)
    }

    gridKeyExtractor(item) {
        return item.id.toString()
    }
    listKeyExtractor(item) {
        return (item.id + 1).toString()
    }
    
    renderGridPic({item}) {
        return (
            <TouchableOpacity 
            onPress={() =>  this.props.picView(item)}
            style={{ flex: 1, flexDirection: 'column', margin: 1 }}
            >
                <Image style={styles.imageThumbnail} source={{ uri: item.previewURL }} />
            </TouchableOpacity>
        )
    }

    renderGridView() {
        return (
            <FlatList
            data={this.props.picsList}
            renderItem={this.renderGridPic}
            numColumns={3}
            key={this.gridKeyExtractor}
            keyExtractor={this.gridKeyExtractor}
            />
        )
    }

    renderListPic({item}) {
        return (
            <TouchableOpacity 
            onPress={() =>  this.props.picView(item)}
            style={{ flex: 1, flexDirection: 'column', margin: 1 }}
            >
                <View style={styles.listContainer}>
                    <Image source={{ uri: item.previewURL }} style={styles.listPhoto} />
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>{item.tags}</Text>
                        <Text style={styles.description}>Views: {item.views}  Likes: {item.likes}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    renderListView() {
        return (
            <FlatList
            data={this.props.picsList}
            renderItem={this.renderListPic}
            keyExtractor={this.listKeyExtractor}
            />
        )
    }

    renderSinglePicView() {
        let pic = this.props.picsList[0]
        const { width, height } = Dimensions.get('window');

        const images = [
            {
                source: { uri: pic.largeImageURL},
                width: width,
                height: height -200,
            },
        ]

        let isInFavorites = false
        this.props.favoritesList.map((item) => { if (item.id === pic.id) isInFavorites = true })

        if (isInFavorites) {
            return(
                <ImageView
                images={images}
                imageIndex={0}
                onClose={() => this.props.lastView()}
                animationType={'slide'}
                isSwipeCloseEnabled={false}
            />
            )
        } else {
            return(
                <ImageView
                images={images}
                imageIndex={0}
                onClose={() => this.props.lastView()}
                animationType={'slide'}
                isSwipeCloseEnabled={false}
                renderFooter={() => (
                    <View>
                        <Button
                        large
                        icon={<Icon type='font-awesome' name='heart' color='white' size={'40'} />}
                        type="clear"
                        buttonStyle={styles.favoritesButton}
                        onPress={() => { 
                            this.props.addToFavorites(pic)
                            Alert.alert('Added to Favorites Successfully')
                        }}
                        />   
                    </View>
                )}
                />
            )
        }
    }

    render() {
        if (this.props.view === 'Grid') return this.renderGridView()
        else if (this.props.view === 'List') return this.renderListView()
        else return this.renderSinglePicView()
    }
}

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
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    listPhoto: {
        height: 60,
        width: 60,
    },
    listTextContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        justifyContent: 'center',
    },
    listTitle: {
        fontSize: 14,
        marginBottom: 5,
        color: '#000',
    },
    favoritesButton: {
        flex: 1,
        marginBottom: 20,
    },
    description: {
        fontFamily: 'AppleSDGothicNeo-Light',
        fontSize: 12,
        color: '#000',
    }
});