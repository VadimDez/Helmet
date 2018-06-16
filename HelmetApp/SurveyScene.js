import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { UniversalComponent } from './UniversalView';
import { ChatComponent } from './ChatComponent';
import { ScanComponent } from './ScanComponent';
import { EmergencyComponent } from './EmergencyComponent';

import { Ionicons } from '@expo/vector-icons';

const defaultAnswer = '<img src="http://via.placeholder.com/350x150" width="100%" /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const globalOptions = [
  {
    title: 'Water Filtration Equipment',
    options: [
      {
        title: 'Filter leakage',
        answer: defaultAnswer
      },
      {
        title: 'Insuficient purification',
        answer: defaultAnswer
      },
      {
        title: 'Decrease in capacity',
        answer: defaultAnswer
      },
      {
        title: 'Change filter',
        answer: defaultAnswer
      }
    ]
  },
  {
    title: 'Soft Drink Filling',
    options: [
      {
        title: 'Weak flow',
        answer: defaultAnswer
      },
      {
        title: 'Too much foam',
        answer: defaultAnswer
      },
      {
        title: 'Extraneous mechanical noise',
        answer: defaultAnswer
      },
      {
        title: 'Compressor overheats',
        answer: defaultAnswer
      },
    ]
  },
  {
    title: 'Carbonated Beverage Filling Machines',
    options: [
      {
        title: 'CO2 finishes quickly',
        answer: defaultAnswer
      },
      {
        title: 'Extraneous mechanical noise',
        answer: defaultAnswer
      },
      {
        title: 'Compressor overheats',
        answer: defaultAnswer
      },
    ]
  },
];



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
    buttonEmergency: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 0,
      margin: 20,
      marginTop: 0,
      shadowColor: '#ff0000',
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
        title: 'Choose machine',
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

    getButtonStyles(rowData, length) {
      if (rowData.index === length) {
        return styles.buttonEmergency;
      }
      return styles.button;
    }
  
    render() {
      const data = [
        { title: 'Fix my problem', action: this.showOptions.bind(this), icon: 'ios-help-circle-outline' },
        { title: 'Chatbot', action: this.goToChat.bind(this), icon: 'ios-ionitron-outline' },
        { title: 'Scan QR', action: this.goToScan.bind(this), icon: 'ios-qr-scanner-outline' },
        { title: 'Emergency Call', action: this.goToEmergencyCall.bind(this), icon: 'ios-call-outline' },
      ];

      return (
        <View style={styles.container}>
          <FlatList
            style={ styles.flatlist }
              data={ data }
              renderItem={(rowData) =>
                <TouchableOpacity style={ this.getButtonStyles(rowData, data.length - 1) } onPress={ rowData.item.action }>
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