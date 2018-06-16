import React from 'react';
import PropTypes from 'prop-types';
import { GiftedChat } from 'react-native-gifted-chat'

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
    this.msgIdCount = 0;
    
    Api.sendRequest( '', null );
  }

  componentWillUnmount() {
    
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
      this.displayMessage(JSON.parse(newPayloadStr), true);
    };

    var currentResponsePayloadSetter = Api.setResponsePayload;
    Api.setResponsePayload = (newPayloadStr) => {
      currentResponsePayloadSetter.call(Api, newPayloadStr);
      this.displayMessage(JSON.parse(newPayloadStr), false);
    };
  }

  // Display a user or Watson message that has just been sent/received
  displayMessage(newPayload, isUser) {
    var textExists = (newPayload.input && newPayload.input.text)
      || (newPayload.output && newPayload.output.text);
    if (isUser !== null && textExists) {
      // Create new message DOM element
      const messages = this.buildMessages(newPayload, isUser);
      this.setState({
        messages: [...messages, ...this.state.messages]
      });

      // Move chat to the most recent messages when new messages are added
      // scrollToChatBottom();
    }
  }

  buildMessages(newPayload, isUser) {
    var textArray = isUser ? newPayload.input.text : newPayload.output.text;
    if (Object.prototype.toString.call( textArray ) !== '[object Array]') {
      textArray = [textArray];
    }
    var messageArray = [];

    textArray.forEach(currentText => {
      if (currentText) {
        var messageJson = {
          isUser,
          text: currentText,
          _id: this.msgIdCount++,
          user: isUser ? {} : {
            _id: 1,
            name: 'watson'
          }
        };
        messageArray.unshift(messageJson);
      }
    });

    return messageArray;
  }

  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={ this.send.bind(this) }
          onInputTextChanged={(text) => this.setState({text})}
        />
      );
  }
}