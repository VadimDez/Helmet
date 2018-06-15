import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Api } from './Api';

export class ChatComponent extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor() {
    super();

    this.chatUpdateSetup();

    this.state = {
      messages: [],
      text: ''
    }
    
    Api.sendRequest( '', null );
  }

  send() {
    var context;
    var latestResponse = Api.getResponsePayload();
    if (latestResponse) {
      context = latestResponse.context;
    }

    const msg = this.state.text;
    // Send the user message
    Api.sendRequest(msg, context);

    this.setState({
      text: ''
    });
  }

  chatUpdateSetup() {
    var currentRequestPayloadSetter = Api.setRequestPayload;
    Api.setRequestPayload = (newPayloadStr) => {
      currentRequestPayloadSetter.call(Api, newPayloadStr);
      this.displayMessage(JSON.parse(newPayloadStr), 'user');
    };

    var currentResponsePayloadSetter = Api.setResponsePayload;
    Api.setResponsePayload = (newPayloadStr) => {
      currentResponsePayloadSetter.call(Api, newPayloadStr);
      this.displayMessage(JSON.parse(newPayloadStr), 'watson');
    };
  }

  // Display a user or Watson message that has just been sent/received
  displayMessage(newPayload, typeValue) {
    var isUser = this.isUserMessage(typeValue);
    var textExists = (newPayload.input && newPayload.input.text)
      || (newPayload.output && newPayload.output.text);
    if (isUser !== null && textExists) {
      // Create new message DOM element
      var messageDivs = this.buildMessageDomElements(newPayload, isUser);
      this.setState({
        messages: [...this.state.messages, ...messageDivs]
      });

      // Move chat to the most recent messages when new messages are added
      // scrollToChatBottom();
    }
  }

  // Checks if the given typeValue matches with the user "name", the Watson "name", or neither
  // Returns true if user, false if Watson, and null if neither
  // Used to keep track of whether a message was from the user or Watson
  isUserMessage(typeValue) {
    if (typeValue === 'user') {
      return true;
    } else if (typeValue === 'watson') {
      return false;
    }
    return null;
  }

  buildMessageDomElements(newPayload, isUser) {
    var textArray = isUser ? newPayload.input.text : newPayload.output.text;
    if (Object.prototype.toString.call( textArray ) !== '[object Array]') {
      textArray = [textArray];
    }
    var messageArray = [];

    textArray.forEach(currentText => {
      if (currentText) {
        var messageJson = {
          isUser,
          text: currentText
        };
        messageArray.push(messageJson);
      }
    });

    return messageArray;
  }

  render() {
    const messages =  this.state.messages.map((msg, i) => <Text key={i}>{ msg.text }</Text>) 
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
        <View style={styles.container}>
          <View style={ styles.messages }>
            { messages }
          </View>
          <TextInput
            style={{height: 40, width: '100%', borderColor: 'gray', borderRadius: 5, borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            returnKeyType="send"
            value={this.state.text}
            onSubmitEditing={ this.send.bind(this) }
          />
        </View>
      </KeyboardAwareScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  messages: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});