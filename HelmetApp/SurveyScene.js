import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { NextView } from './NextView';

export class SurveyScene extends React.Component {
    static propTypes = {
      title: PropTypes.string,
      navigator: PropTypes.object.isRequired,
    }

    _onForward = () => {
      this.props.navigator.push({
        component: NextView,
        title: 'Scene'
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Current Scene: { this.props.title }</Text>

            <TouchableHighlight onPress={this._onForward}>
                <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });