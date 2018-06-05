import React, {Component} from 'react'
import {StyleSheet, FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem'

export default class PlaceList extends Component {

    render() {
        const {places} = this.props
        return (
            <FlatList
                style={styles.container}
                data={places}
                renderItem={(info) => (
                <ListItem
                    placeName={info.item.value}
                    onItemPressed={() => this.props.onItemDeleted(info.item.key)}/>
            )}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});