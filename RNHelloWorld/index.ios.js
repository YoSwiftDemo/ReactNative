/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import 导入RN包
import 导入RN组件
AppRegistry JS运行所有的RN应用的入口
StyleSheet RN中的样式表，类似CSS样式表
Text View  RN开发中的组件
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
/*
创建RN组件
render(){ } 函数
*/
export default class RNHelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          文本内容!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
/*
StyleSheet 样式 整个应用只创建一次，不是每次渲染时重新创建
*/
const styles = StyleSheet.create({
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
/*
注册入口组件RN应用程序的JavaScript入口
AppRegistry注册应用程序的入口组件，告诉RN哪一个组件被被注册为根容器
registerComponent
告诉RN
 () => RNHelloWorld  参数=>组件名  返回的必须是定义的组件的名字
 等价欲ES5的 function(){return RNHelloWorld}
*/
AppRegistry.registerComponent('RNHelloWorld', () => RNHelloWorld);
