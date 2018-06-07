import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux'

import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import placeImage from './src/assets/image.jpg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions'

class App extends React.Component {

  // state = {
  //   places: [],
  //   selectedPlace: null
  // }

  makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) 
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return text;
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
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
    this.props.onDeletePlace()
    
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }

  render() {
    const {places, selectedPlace} = this.props
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModelClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList
          places={places}
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

const mapStateToProps = state => {
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

// export default connect()(App)