import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'

export default class App extends React.Component {

  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    // this.setState(prevState => {
    //   return {
    //     places: [
    //       ...prevState.places,
    //       {
    //         key: Math.random(),
    //         value: placeName
    //       }
    //     ]
    //   }
    // })

    this.setState(prevState => {
      return {
        places: prevState.places.concat({key: Math.random(), value: placeName})
      }
    })
  }

  onItemDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState
          .places
          .filter(place => {
            return place.key !== key
          })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.onItemDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  }
});
