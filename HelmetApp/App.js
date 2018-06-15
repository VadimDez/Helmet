import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight } from 'react-native';
import { SurveyScene } from './SurveyScene';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SurveyScene,
          title: 'Helmet',
          passProps: {
          }
        }}
        style={{flex: 1}}
      />
    );
  }
}