import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  TouchableHighlight,
  Button,
  TextInput,
  Dimensions,
  Image
} from 'react-native';
import PropTypes from 'prop-types';


export class EmergencyComponent extends React.Component {


  render() {
    return (
      <View  style={{ paddingTop: 20 }} >
        <Image source={ require("./assets/img/callEmergency.jpg") } />
      </View>
    );
  }
}