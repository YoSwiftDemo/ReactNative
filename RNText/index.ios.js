/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //引入
 var Header = require("./header");
 var News = require("./news");
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//组件
//    {/* Header */}         {/* News */}
//定义数组
var RNText = React.createClass({
  render: function () {
    var news = [
"1: RN学习",
"2: RN视频学习,多向党总请教问题学习。虚心好学，志在必得！",
"3: RN笔记，笔记包含了RN官网的文档讲解，但是官网的文档没怎么仔细看，视频讲解只是一部分的知识，所以，努力吧，加油",
"4: 早日学完RN，工资蹭蹭上升",
    ];
    return (
      <View style = {styles.flex}>
          <Header> </Header>
          <News news = {news}></News>
      </View>
    );
  }
});
//样式
var styles = StyleSheet.create({
  flex:{
    flex:1,
  },
});
AppRegistry.registerComponent('RNText', () => RNText);
