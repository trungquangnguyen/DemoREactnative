/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

export default class WeatherProject extends Component {
constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _handleTextChange(text) {
    console.log(text);
    this.setState((state) => { 
       return { text: text}; 
    });

  }

  render() {
    return (
      <View style={styles.container}>
         <Image
          source={require('./resource/flowers.png')}
          resizeMode='cover'
          style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                 Current weather for 
              </Text>
              <View style={styles.zipContainer}>
              <TextInput
                 style={styles.zipCode}
                 onSubmitEditing={(event) => this._handleTextChange(event)}/>
              </View>
            </View>
          </View>
        </Image>  
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 80,
    height: baseFontSize,
    fontSize: baseFontSize,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF',
    textAlign: 'right'
  }
});
AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
