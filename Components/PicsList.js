import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import { Header, Button, Icon, SearchBar, ButtonGroup  } from 'react-native-elements'

export default class PicsList extends Component {

    constructor(props) {
        super(props)
        this._keyExtractor = this._keyExtractor.bind(this)
        this.renderGridPic = this.renderGridPic.bind(this)
        this.renderGridView = this.renderGridView.bind(this)
        this.renderListPic = this.renderListPic.bind(this)
        this.renderListView = this.renderListView.bind(this)
    }

    _keyExtractor(item) {
        return item.id
    }
    
    renderGridPic({item}) {
        const { navigate } = this.props.navigation
        return (
            <TouchableOpacity 
            onPress={() => navigate('Picture', { picData: item })} 
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
            />
        )
    }

    renderListPic({item}) {
        const { navigate } = this.props.navigation
        return (
            <TouchableOpacity 
            onPress={() => navigate('Picture', { picData: item })} 
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
            key={this._keyExtractor}
            />
        )
    }

    render() {
        return(
            this.props.view === 'Grid' ? this.renderGridView() : this.renderListView()
        )
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