import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button } from 'react-native';
import PropTypes from 'prop-types';
import { UniversalComponent } from './UniversalView';

const globalOptions = [
  {
    title: 'asdqwe',
    answer: 'asd qwe answer'
  }
];

export class SurveyScene extends React.Component {
    static propTypes = {
      title: PropTypes.string,
      navigator: PropTypes.object.isRequired,
    }

    _onForward = () => {
      return () => {
        
      }
    }

    showOptions() {
      this.props.navigator.push({
        component: UniversalComponent,
        title: 'Fix my problem',
        passProps: {
          options: globalOptions
        }
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Button onPress={this.showOptions.bind(this)}
                    title="Fix my problem"
            />

            <Button onPress={this._onForward}
                    title="Fix my problem"
            />

            <Button onPress={this._onForward}
                    title="Fix my problem"
            />

            <Button onPress={this._onForward}
                    title="Chatbot"
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