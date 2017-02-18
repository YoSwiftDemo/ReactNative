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
  View
} from 'react-native';
//组件
var RNStyleSheet = React.createClass({
  render: function(){
    return (
        <View style = {styles.container}>
          <View style = {[styles.top,styles.border]}>
          </View>
          <View style = {[styles.bottom,styles.border,{borderWidth:5}]}>
          </View>
        </View>
    );
  }
});
//样式
/*
定义样式
1.HTML5以;结尾 React以,结尾
2. HTML5中key，value都不见引号
  React中属于JavaSript对象，key的名字不能出现“－”，需要使用驼峰命名法，如果value为字符串，一定加双引号react中不需要单位
3.HTML5中value数值需要单位
React中不需要单位

拼接样式  数组实现 [styles.top,border]
数组中 靠后的优先级高 采取内连样式 ｛｝添加个样式对象
[styles.bottom,styles.border,{borderWidth:5}]
5的等级高 styles.border里宽度3  最终宽度为5
（不建议这样写，最好还是卸载样式里）
*/
var styles = StyleSheet.create({
  //外层view
  container:{
    backgroundColor:"red",
    width:300,
    height:400,
    marginTop:25,
    marginLeft:30,
  },
  //内层 顶部view
  top:{
    backgroundColor:"green",
    width:280,
    height:250,
    // margin 距离上下左右
    // marginTop 上边距
    margin:10,
  },
  bottom :{
  backgroundColor:"yellow",
  width:280,
  height:110,
  margin:10,
  },
  //公有部分提出来
  border:{
    borderWidth:3,
    borderColor:"black",
  },
});

AppRegistry.registerComponent('RNStyleSheet', () => RNStyleSheet);
