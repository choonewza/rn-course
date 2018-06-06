import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import placeImage from './src/assets/image.jpg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

export default class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  }

  makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) 
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return text;
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: [
          ...prevState.places, {
            key: this.makeid(),
            name: placeName,
            image: {
              uri: "https://media.vogue.in/wp-content/uploads/2018/01/5-global-trends-that-will-chan" +
                  "ge-beauty-in-2018-simpler-habits-and-J-beauty-vogue-india-866x487.jpg"
            }
          }
        ]
      }
    })

    // this.setState(prevState => {   return {     places:
    // prevState.places.concat({key: Math.random(), value: placeName})   } })
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

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState
          .places
          .filter(place => {
            return place.key !== prevState.selectedPlace.key
          }),
        selectedPlace: null
      }
    })
    
  }

  modalClosedHandler = () => {
    this.setState({selectedPlace: null})
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState
          .places
          .find(place => {
            return place.key === key
          })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModelClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeSelectedHandler}/>
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
