/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

/*在RN中，实现页面切换，提供2各组件：TabBarIOS和TabBarIOS。Item
常用性能
selecrted：是否选中某个Tab  如果为true则选中并且显示组件
title：标题
barTintColor：Tab栏 的背景颜色
icon：图标
onPress：点击事件，当某个tab被选中时，需要改变组件的select={true}设置
 实现原理：点击tab时出发onPress方法，记录被点击tab的title。再通过title设置tab是否选中（通过比较设置selected的值true/false）
*/
//把TextInput Image ListView Demo集成到TabBarIOS中
//导入：textInput.js
//导入：loadimage.js 在Xcode中加载图片，配置https请求
//导入：movieList.js  data.json
var RNTextInput = require("./textInput");
var RNImage = require("./loadimage");
var MovieList=require("./movieList");
var RNTabBarIOS = React.createClass({
  render:function () {
    return(
      <TabBarIOS style = {{fles:1}}>
        <TabBarIOS.Item
          title = "RNTextInput"
          icon ={require("image!001")}
          onPress = {this.select.bind(this,"RNTextInput")}
          selected = {this.state.tab === "RNTextInput"}>
          <RNTextInput></RNTextInput>
          </TabBarIOS.Item>
        <TabBarIOS.Item
          title ="RNImage"
          systemIcon ="bookmarks"
          onPress = {this.select.bind(this,"RNImage")}
          selected = {this.state.tab === "RNImage"}>
          <RNImage></RNImage>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title ="MovieList"
          icon = {require("iamge!message")}
          onPress = {this.select.bind(this,"MovieList")}
          selected = {this.state.tab === "MovieList"}>
          <MovieList>
          </MovieList>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },
//
getInitialState:function () {
  return{
    //用于记录显示页面组件对应的title
    tab:"RNTextInput"
  };
},
//TabVarIOS.Item的onPress的处理方法
select:function (tabName) {
  this.setState({
      tab:tabName
  });
},
});
AppRegistry.registerComponent('RNTabBarIOS', () => RNTabBarIOS);
