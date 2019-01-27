/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     它终于出来了!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <View style={styles.test1}/>
          <View style={styles.test2}/>
          <View style={styles.test3}/>
        </View>
        <View style={styles.testPosition}>
          <Text style={styles.welcome} opacity={0}>你好</Text>
          <View style={styles.welcome} opacity={0.1}/>
          <View style={styles.welcome} opacity={0.2}/>
          <View style={styles.welcome} opacity={0.3}/>
          <View style={styles.welcome} opacity={0.4}/>
          <View style={styles.welcome}/>
        </View>  
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'#fff',
    borderStyle:'solid',
    borderColor:'red',
    justifyContent:'space-around',
  },
  firstRow: {
    height:180,
    top:40,
    flex:1,
    // flexWrap:'nowrap',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
     // overflow:'hidden',
    backgroundColor:'pink',

  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  test1:{
    height:68,
    width:68,
    borderRadius:50,
    backgroundColor:'black',
  },
  test2:{
    height:68,
    width:40,
    borderTopLeftRadius:30,
    backgroundColor:'#ccc',
  },
  test3:{
    height:68,
    width:90,
    borderRadius:70,
    backgroundColor:'#ede',
  },
  testPosition:{
    height:280,
    width:0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    top:270,
  },
  title:{
        color:'grey',
        fontSize:20,
        backgroundColor:'#aaa',
  },
  welcome:{
    width:50,
    height:50,
    borderWidth:1,
    backgroundColor:'#fff',
    borderRadius:25,
  },
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#CFF',
//   },
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,

//     color:'#f00',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
