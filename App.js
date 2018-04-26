/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Image, Alert, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      })
    }, 500);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.blue}>{display}</Text>
    );
  }
}

type Props = {};
export default class App extends Component<Props> {

  _onPressButton(text) {
    Alert.alert(text);
  }
  _onPressButton2() {
    Alert.alert('真2');
  }
  _onLongPressButton() {
    Alert.alert('手指酸不');
  }

  constructor(props){
    super(props);
    this.state = {text: ''}
  }

  render() {
    let pic = {
      uri: 'https://facebook.github.io/react/logo-og.png'
    };
    return (
      <ScrollView>
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
            <View style={styles.alternativeLayoutButtonContainer}>
              <TouchableHighlight onPress={() => this._onPressButton('TouchableHighlight')} underlayColor="red">
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>TouchableHighlight</Text>
                </View>
              </TouchableHighlight>
              <TouchableOpacity onPress={() => this._onPressButton('TouchableOpacity')}>
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>TouchableOpacity</Text>
                </View>
              </TouchableOpacity>
              <TouchableNativeFeedback onPress={() => this._onPressButton('TouchableNativeFeedback')} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>TouchableNativeFeedback</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableWithoutFeedback onPress={() => this._onPressButton('TouchableWithoutFeedback')}>
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableHighlight onPress={() => this._onPressButton('TouchableHighlight')} onLongPress={this._onLongPressButton} underlayColor="red">
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableHighlight>
              <Button 
                onPress={() => this._onPressButton('你他妈真敢点')}
                title="点我"
              />
              <Button 
                onPress={this._onPressButton2}
                title="点我2"
                color="#841584"
              />
            </View>
            <Image source={pic} style={{width: 200, height: 200}}></Image>
            <View style={{padding: 10}}>
              <TextInput style={{height: 40}} placeholder="输入框" onChangeText={(text) => this.setState({text})} />
              <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '单词').join('~')}
              </Text>  
            </View>
            <Text>bottom</Text>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>

            <Blink text="闪一闪" />

          </View>
        </View>
      </ScrollView>
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
  red: {
    color: 'red'
  },
  blue: {
    color: 'blue'
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
  button1: {
    marginBottom: 30,
    width: 120,
    alignItems: 'center',
    backgroundColor: '#2196f3'
  },
  button1Text: {
    padding: 20,
    color: 'red'
  },
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
