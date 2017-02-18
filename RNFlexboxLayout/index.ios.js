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
// 组件
var RNFlexboxLayout = React.createClass({
  render:function () {
    return (
      <View style = {styles.container}>
        <View style = {styles.child1}>
        </View>
        <View style = {styles.child2}>
        </View>
      </View>
    );
  }
});
//样式
// var styles = StyleSheet.create({
//   //外层
//   container:{
//     margin:30,
//     width:300,
//     height:500,
//     backgroundColor:"yellow",
//     //默认主轴方向是column纵向排列
//     //设置为横向排列方法
//     flexDirection:"row",
//     //主轴方向
//     justifyContent:"center",
//     //交叉轴
//     alignItems:"center",
//   },
  // 内层
//   child1:{
//     width:100,
//     height:100,
//     backgroundColor:"green",
//   },
//   child2:{
//     width:100,
//     height:100,
//     backgroundColor:"blue",
//   }
// });

/*
flex
可以给组件指定样式，
flex可以是数字，flex:1 组件可以撑满父组件的所有空间
同时存在多个并列的子组件，都设置flex:1，均分解决  如果flex值不一样，按比例
*/
//样式2
var styles = StyleSheet.create({
  container:{
    margin:30,
    flex:1,
    backgroundColor:"cyan",
  },
  child1:{
    flex:1,
    backgroundColor:"green",
  },
  child2:{
    flex:1,
    backgroundColor:"yellow",
  },
});
AppRegistry.registerComponent('RNFlexboxLayout', () => RNFlexboxLayout);
