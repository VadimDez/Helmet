import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button } from 'react-native';
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
          <ScrollView>
            <Button onPress={this._onForward}
                    title="Fix my problem"
            />

            <Button onPress={this._onForward}
                    title="Fix my problem"
            />

            <Button onPress={this._onForward}
                    title="Fix my problem"
            />

            <Button onPress={this._onForward}
                    title="Fix my problem"
            />
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