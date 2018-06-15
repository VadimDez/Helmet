import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button } from 'react-native';
import PropTypes from 'prop-types';

import { ChatComponent } from './ChatComponent';

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

  render() {
    let options = '';

    if (this.props.options) {
      options = (<ScrollView>
        { this.props.options.map((option, i) => {
        return <Button title={option.title}
                        onPress={this._handlePress(option).bind(this)}
                        key={i}
        />
      }) }
      </ScrollView>)
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});