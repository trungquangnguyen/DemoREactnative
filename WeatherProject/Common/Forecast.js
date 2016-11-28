import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
class Forecast extends Component {
  render() {
    var ulr = 'http://openweathermap.org/img/w/'+ this.props.image +'.png'
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}{'\n'}
          <Image source={{uri: ulr}} style={{width: 80, height: 80}} />
        </Text>
        <Text style={styles.mainText}>
          Cloudiness:{this.props.description}{'\n'}
          wind: {this.props.wind} m/s
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°F {'\n'}
          Pressure: {this.props.pressure} hpa {'\n'}
          Humidity:{this.props.humidity} % {'\n'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  }
})

export default Forecast;
