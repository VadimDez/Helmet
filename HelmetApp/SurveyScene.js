import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button, ListView, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { UniversalComponent } from './UniversalView';
import { ChatComponent } from './ChatComponent';

const globalOptions = [
  {
    title: 'asdqwe',
    answer: 'asd qwe answer'
  },
  {
    title: 'asdasd',
    options: [
      {
        title: 'asd#1',
        answer: 'asd#1'
      },
      {
        title: 'asd#2',
        answer: 'asd#2'
      },
      {
        title: 'asd#3',
        answer: 'asd#3'
      }
    ]
  }
];

export class SurveyScene extends React.Component {

    constructor() {
        super();
        this.state = {
            
        };
    }

    static propTypes = {
      title: PropTypes.string,
      navigator: PropTypes.object.isRequired,
    }

    _onForward = () => {
      return () => {
        
      }
    }

    goToChat() {
      this.props.navigator.push({
        component: ChatComponent,
        title: 'Chat',
        passProps: {
        }
      });
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
            <FlatList style={{ backgroundColor: 'white', flex: 1 } }
                data={[
                  { title: 'Fix my problem', action: this.showOptions.bind(this) },
                  { title: 'Chatbot', action: this.goToChat.bind(this) },
                ]}
                renderItem={(rowData) =>
                  <Button onPress={ rowData.item.action }
                    title={ rowData.item.title }
                    style={ styles.button }
                  />}
                keyExtractor={(item, index) => `${ index }`}
            />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
      button: {
          backgroundColor: '#00aeef',
          borderColor: 'red',
          borderWidth: 5,
          borderRadius: 15,
          color: 'red'
      },
    container: {
      flex:1,
      backgroundColor: '#263c54',
      alignItems: 'center',
      justifyContent: 'center',
    },

  });