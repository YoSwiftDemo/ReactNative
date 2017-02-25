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
  TextInput,
  TouchableOpacity,
} from 'react-native';
//组件
var RNTextInput = React.createClass({
  getInitialState: function () {
    return {
      inputText:" ",
    };
  },
  //输入框的onchange的实现
  getContent:function (text) {
    this.setState({
      inputText:text,
    });
  },
  clickBtn:function () {
    alert(this.state.inputText);
  },
  render:function () {
    return(
      <View style = {styles.container}>
        <View style = {styles.flex}>
          <TextInput
            style = {styles.input}
            returnKeyType = "search"
            placeholder = "请输入内容"
            onChangeText = {this.getContent}
          />
        </View>
        <TouchableOpacity
          style = {styles.btn}
          onPress = {this.clickBtn}>
          <Text style = {styles.search}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
// 样式
var styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    height:45,
    marginTop:25,
  },
  flex:{
    flex:1,
  },
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
    backgroundColor:"#23BEff",
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
//注册渲染
AppRegistry.registerComponent('RNTextInput', () => RNTextInput);
