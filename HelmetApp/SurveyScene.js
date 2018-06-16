import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { UniversalComponent } from './UniversalView';
import { ChatComponent } from './ChatComponent';

import { Ionicons } from '@expo/vector-icons';

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
          <FlatList
            style={ styles.flatlist }
              data={[
                  { title: 'Fix my problem', action: this.showOptions.bind(this), icon: 'ios-help-circle-outline' },
                  { title: 'Chatbot', action: this.goToChat.bind(this), icon: 'ios-chatbubbles-outline' },
                  { title: 'Залупа', action: this.goToChat.bind(this), icon: 'ios-close-circle-outline' },
              ]}
              renderItem={(rowData) =>
                <TouchableOpacity style={styles.button} onPress={ rowData.item.action }>
                  <Text style={styles.textStyle}  title={ rowData.item.title }>

                    <View style={{ borderRightWidth: 1, borderRightColor: 'grey', width: 70, height:70, justifyContent: 'center'}}>
                      <Ionicons name={ rowData.item.icon } size={30} color="grey" />
                    </View>

                      { rowData.item.title }
                      </Text>
                </TouchableOpacity>}
              keyExtractor={(item, index) => `${ index }`}
          />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      //alignItems: 'flex-start',
      //flexDirection: 'row',
      backgroundColor: '#263c54',
        paddingTop:20,
        flexWrap: 'wrap',
    },
      textStyle: {
        color: '#797f88',
        justifyContent: 'center'
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

      },
      flatlist: {

          backgroundColor: 'white',

          /*flexGrow: 1,
          flexShrink: 0,
          flexBasis: '25%',
        backgroundColor: 'white',
        height: 'auto',
        widith: '80%',
        borderRadius:10,
        marginLeft: 20,
        marginRight: 20,*/
    }

  });