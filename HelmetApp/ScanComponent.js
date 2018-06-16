// import React, {Component} from 'react';
// import {StyleSheet, View} from 'react-native';

// import {QRscanner} from 'react-native-qr-scanner';
 
// export class ScanComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <QRscanner onRead={this.onRead} finderY={-20}/>
//       </View>
//     );
//   }
//   onRead = (res) => {
//     console.log(res);
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000'
//   }
// });

// 'use strict';

// import React, { Component } from 'react';
// import { Linking } from 'react-native';

// // import QRCodeScanner from 'react-native-qrcode-scanner';

// export class ScanComponent extends Component {
//   onSuccess(e) {
//     Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//   }

//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess.bind(this)}
//         style={{ flex: 1 }}
//       />
//     );
//   }
// }

'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export class ScanComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});