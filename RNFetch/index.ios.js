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
//在RN中使用fetch实现网络请求
// 练习1：使用get和post方式获取数据
var RNFetch = require("./getData");
// 练习2：电影列表（网络请求数据）
var RNFetch = require("./movieList");
AppRegistry.registerComponent('RNFetch', () => RNFetch);
