import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//组件
var  Header = React.createClass({
  render:function () {
    return(
      <View style = {styles.flex}>
        <Text style = {styles.font}>
          <Text style = {styles.font_1}>网易</Text>
          <Text style = {styles.font_2}>新闻</Text>
          <Text>有态度</Text>
        </Text>
      </View>
    );
  }
});
//样式
var styles = StyleSheet.create({
  flex:{
    marginTop:25,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:"#EF2d36",
    alignItems:"center",
  },
//字体设置的公共部分
font :{
  fontSize:25,
  fontWeight:"bold",
  textAlign:"center",
},
font_1:{
  color:"#CD1D1C",
},
font_2:{
  color:"#FFF",
  backgroundColor:"#CD1D1C",
},
});
 //导出模块
 module.exports = Header;
