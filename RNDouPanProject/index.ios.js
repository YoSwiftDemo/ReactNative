/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//  TabBarIOS,  StatusBar,
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar,
} from 'react-native';
//影藏状态栏
StatusBar.setHidden(true);
//TabBarIOS管理2个模块：图书/电影
var RNDouPanProject = React.createClass({
  getInitialState:function () {
    return{
      selectedTab:"图书"
    };
  },
  render:function () {
    return(
      <TabBarIOS>

        <TabBarIOS.Item
          title = "图书"
          selected = {this.state.selectedTab === "图书"}
          onPress = {()=>{
          this.setState({
            selectedTab:"图书"
          })
          }}
          // icon = {require("image!book")}
          >
          <View
            style ={{backgroundColor:"cyan",flex:1}}>
            </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "电影"
          selected = {this.state.selectedTab === "电影"}
          onPress = {()=>{
          this.setState({
            selectedTab:"电影"
          })
          }}
          // icon = {require("image!movie")}
          >
          <View style ={{backgroundColor:"yellow",flex:1}}>

          </View>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('RNDouPanProject', () => RNDouPanProject);
