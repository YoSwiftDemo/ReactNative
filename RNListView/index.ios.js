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

// ListView 基本
//var RNListView = require("./myListView");
// 电影列表
var RNListView = require("./movieList");
AppRegistry.registerComponent('RNListView', () => RNListView);
