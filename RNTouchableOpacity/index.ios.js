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
  TouchableOpacity,
} from 'react-native';
//组件
var RNTouchableOpacity = React.createClass({
  clickBtn:function () {
    alert("点击搜索按钮");
  },
  render:function () {
    return (
    <View style = {styles.container}>
      <View style = {styles.flex}>
        <View style = {styles.input}>
        </View>
      </View>
      <TouchableOpacity style = {styles.btn} onPress={this.clickBtn}>
        <Text style = {styles.search}>搜索</Text>
      </TouchableOpacity>
    </View>
    );
  }
});
//样式
var styles = StyleSheet.create({
  container:{
  flexDirection:"row",
  height:45,
  marginTop:25,
},
flex:{
  flex:1,
},
//paddingLeft 左边内边距
input:{
  height:45,
  borderWidth:1,
  marginLeft:5,
  paddingLeft:5,
  borderColor:"#CCC",
  borderRadius:4,
},
btn:{
  width:55,
  marginLeft:5,
  marginRight:5,
  backgroundColor:"#23BEFF",
  height:45,
  justifyContent:"center",
  alignItems:"center",
},
search:{
  color:"#FFF",
  fontSize:15,
  fontWeight:"bold",
},
});
AppRegistry.registerComponent('RNTouchableOpacity', () => RNTouchableOpacity);
