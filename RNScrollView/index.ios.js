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
//实现ScrollView基本功能
// var RNScrollView =  require("./myScrollView");
//电影列表
var  RNScrollView = require("./movieList");
AppRegistry.registerComponent('RNScrollView', () => RNScrollView);
