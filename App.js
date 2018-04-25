/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://facebook.github.io/react/logo-og.png'
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.header64} >
          <View style={styles.header20}/>
          <View style={styles.header44}>
            <View style={styles.header44CellFixed}>
              <Text style={styles.header44Text}>
                返回
              </Text>
            </View>
            <View style={styles.header44Cell}>
              <Text style={styles.header44Text}>
                标题
              </Text>
            </View>
            <View style={styles.header44CellFixed}>
              <Text style={styles.header44Text}>
                分享
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <Image source={pic} style={{width: 200, height: 200}}/>
          <Text>tup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header64: {
    backgroundColor: '#fff',
    height: 64,
    elevation: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  header20: {
    height: 20
  },
  header44: {
    height: 44,
    flexDirection: 'row'
  },
  header44Cell: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header44CellFixed: {
    height: 44,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header44Text: {
    fontSize: 16
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
