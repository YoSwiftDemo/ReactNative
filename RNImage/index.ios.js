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
  Image,
} from 'react-native';

//组件
var RNImage = React.createClass({
  render: function () {
    return (
      <View style ={styles.container}>
        <View style = {styles.net}>
          <Image
           style ={styles.netImage}
           source = {{uri:"http://pic.58pic.com/58pic/14/13/65/91u58PICh8S_1024.jpg"}}
          />
        </View>
        <View style = {styles.local}>
          <Image
              style = {styles.loaclImage}
              source = {{uri:"localPic"}}
          />
        </View>
      </View>
    );
  },
});
//
var styles = StyleSheet.create({
  container:{
    flex:1,
    margin:1,
    alignItems:"center",
  },
  net:{
    marginTop:30,
    width:300,
    height:240,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"cyan",
  },
  netImage:{
    width:280,
    height:200,
    backgroundColor:"gray",
  },
  local:{
    marginTop:30,
    width:300,
    height:200,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"yellow",
  },
  loaclImage:{
    width:180,
    height:100,
    backgroundColor:"gray",
  },
});
//
AppRegistry.registerComponent('RNImage', () => RNImage);
