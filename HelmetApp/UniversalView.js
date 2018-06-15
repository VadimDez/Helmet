import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button } from 'react-native';
import PropTypes from 'prop-types';
import { NextView } from './NextView';

export class UniversalComponent extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    answer: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  };

  _handlePress() {

  }

  render() {
    let options = '';

    if (this.props.options) {
      options = this.props.options.map(option => {
        return <Button title={option.title}
                        onPress={this._handlePress.bind(this)}
        />
      });
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          { options }
        </ScrollView>
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