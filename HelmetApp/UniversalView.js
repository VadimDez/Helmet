import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { ChatComponent } from './ChatComponent';

import { Ionicons } from '@expo/vector-icons';

export class UniversalComponent extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    answer: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  };

  _handlePress(option) {
    return () => {
      this.props.navigator.push({
        component: UniversalComponent,
        title: option.title,
        passProps: {
          ...option
        }
      });
    };
  }

  goToChat() {
    this.props.navigator.push({
      component: ChatComponent,
      title: 'Chat',
      passProps: {
      }
    });
  }

  /*
  * <Button title={option.title}
                        onPress={this._handlePress(option).bind(this)}
                        key={i}
        />
        */
  render() {
    let options = '';

    if (this.props.options) {
      options = (<ScrollView><View style={styles.container}>
        { this.props.options.map((option, i) => {
        return <TouchableOpacity style={styles.button} onPress={this._handlePress(option).bind(this)} key={i}>
          <Text style={styles.textStyle}  title={ option.title }>

          <View style={{ borderRightWidth: 1, borderRightColor: '#dbdbdb', width: 70, height:45, justifyContent: 'center'}}>
           <Ionicons name="ios-help-circle-outline" size={30} color="#009999" style={{ textAlign: 'center' }} />
          </View>

          <View style={{ width: 215, height:45, paddingLeft:30, justifyContent: 'center'}}>
            <Text style={{ color: '#818790', fontSize: 16 }}>{ option.title }</Text>
            <Text style={{ color: '#818790', fontSize: 10 }}>{ option.title }</Text>
          </View>

          <View style={{ width: 30, height:45, justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
            <Ionicons name="ios-arrow-forward" size={30} color="#009999" />
          </View>
          </Text>
        </TouchableOpacity>
      }) }
      </View></ScrollView>)
    } else if (this.props.answer) {
      options = (
        <ScrollView>
          <Text>{ this.props.answer }</Text>
          <Button onPress={ this.goToChat.bind(this) } title="Didn't help - use the chat"/>
        </ScrollView>
      );
    }

    return (
      <View style={styles.container}>
        { options }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
  textStyle: {
    color: '#797f88',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 0,
    margin: 20,
    marginTop: 0,
    shadowColor: '#686868',
    shadowOffset: {
      width: 3,
      height: 3
    },
    minHeight: 75,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    justifyContent: 'center'

  },
});