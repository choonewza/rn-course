import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

export default class ListItem extends Component {
  render() {
    const {placeName, onItemPressed} = this.props
    return (
      <TouchableOpacity onPress={onItemPressed}>
        <View style={styles.container}>
          <Text>{placeName}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: "#eee"
  }
});
