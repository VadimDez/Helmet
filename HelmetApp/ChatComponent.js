import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button } from 'react-native';
import PropTypes from 'prop-types';

export class ChatComponent extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  render() {
    return (<Text>Chat</Text>);
  }
}