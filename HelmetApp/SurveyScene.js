import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { UniversalComponent } from './UniversalView';
import { ChatComponent } from './ChatComponent';
import { ScanComponent } from './ScanComponent';
import { EmergencyComponent } from './EmergencyComponent';

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

    goToScan() {
      this.props.navigator.push({
        component: ScanComponent,
        title: 'Scan QR',
        passProps: {}
      });
    }

    goToEmergencyCall() {
      this.props.navigator.push({
        component: EmergencyComponent,
        title: 'Emergency Call',
        passProps: {}
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <FlatList
            style={ styles.flatlist }
              data={[
                  { title: 'Fix my problem', action: this.showOptions.bind(this), icon: 'ios-help-circle-outline' },
                  { title: 'Chatbot', action: this.goToChat.bind(this), icon: 'ios-ionitron-outline' },
                  { title: 'Scan QR', action: this.goToScan.bind(this), icon: 'ios-chatbubbles-outline' },
                  { title: 'Emergency Call', action: this.goToEmergencyCall.bind(this), icon: 'ios-chatbubbles-outline' },
              ]}
              renderItem={(rowData) =>
                <TouchableOpacity style={styles.button} onPress={ rowData.item.action }>
                  <Text style={styles.textStyle}  title={ rowData.item.title }>

                    <View style={{ borderRightWidth: 1, borderRightColor: '#dbdbdb', width: 70, height:45, justifyContent: 'center'}}>
                      <Ionicons name={ rowData.item.icon } size={30} color="#009999" style={{ textAlign: 'center' }} />
                    </View>

                    <View style={{ width: 165, height:45, paddingLeft:30, justifyContent: 'center'}}>
                      <Text style={{ color: '#818790', fontSize: 16 }}>{ rowData.item.title }</Text>
                      <Text style={{ color: '#818790', fontSize: 10 }}>{ rowData.item.title }</Text>
                    </View>

                    <View style={{ width: 70, height:45, justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                      <Ionicons name="ios-arrow-forward" size={30} color="#009999" style={{ textAlign: 'right' }} />
                    </View>

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
        paddingTop:40,
        flexWrap: 'wrap',
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