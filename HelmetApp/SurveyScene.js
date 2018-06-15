import React from 'react';
import { StyleSheet, Text, View, ScrollView, NavigatorIOS, TouchableHighlight, Button, ListView } from 'react-native';
import PropTypes from 'prop-types';
import { NextView } from './NextView';

export class SurveyScene extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

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
                    style={ styles.button }
                    color="red"
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

              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text>{rowData}</Text>}
              />

          </ScrollView>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
      button: {
          color: '#000000',
      },
    container: {
      flex: 1,
      backgroundColor: '#263c54',
      alignItems: 'center',
      justifyContent: 'center',
    },

  });