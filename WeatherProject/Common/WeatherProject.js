import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';
import Forecast from './Forecast';

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      zip: 'Ho Chi Minh',
      forecast: null
    };
    this._handleTextChange('Ho Chi Minh')
  }

  _handleTextChange(zip) {
    console.log(zip);
    this.setState((state) => { 
       return { zip: zip}; 
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=imperial&APPID=' + API_KEY)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.name,
            image: responseJSON.weather[0].icon,
            description: responseJSON.weather[0].description,
            wind: responseJSON.wind.speed,
            temp: responseJSON.main.temp,
            pressure: responseJSON.main.pressure,
            humidity: responseJSON.main.humidity
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast 
                  main={this.state.forecast.main}
                  image={this.state.forecast.image}
                  description={this.state.forecast.description}
                  wind={this.state.forecast.wind}
                  temp={this.state.forecast.temp}
                  pressure={this.state.forecast.pressure}
                  humidity={this.state.forecast.humidity}
                  />;
    }
    return (
      <View style={styles.container}>
         <Image
          source={require('../resource/flowers.png')}
          resizeMode='cover'
          style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                 Current weather for 
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  placeholder={this.state.zip}
                  placeholderTextColor='white'
                  style={styles.zipCode}
                  onSubmitEditing={(event) => this._handleTextChange(event.nativeEvent.text)}
                />
              </View>
            </View>
            {content}
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
    width: 150,
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
export default WeatherProject;
