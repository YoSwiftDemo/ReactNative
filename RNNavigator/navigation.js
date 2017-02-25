//
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';
//组件
//定义第一个界面
//FirstPage 一个Button，点击进入下一级界面
//按钮onPress事件处理方法
//push 推出下一级界面
var FirstPage =React.createClass({
  pressPush:function () {
    var nextRoute = {
      component:SecondPage
    };
      this.props.navigator.push(nextRoute);
  },
  render:function () {
    return(
      <View
        style = {[styles.flex,{backgroundColor:"yellow"}]}>
        <TouchableOpacity
          style={styles.btn}
          onPress ={this.pressPush}>
          <Text>点击推出下一级页面</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
//第二个页面
//secondPage  一个Button 返回上一级界面
var SecondPage= React.createClass({
  pressPop:function () {
 this.props.navigator.pop();
  },
 render:function (){
   return (
   <View
     style = {[styles.flex,{backgroundColor:"cyan"}]}>
     <TouchableOpacity
       style={styles.btn}
       onPress ={this.pressPop}>
       <Text>点击看我跳回去</Text>
     </TouchableOpacity>
   </View>
 );
 }
});
//
//第一步 设置 initialRoute 这个指定了默认的页面，qidongapp看到界面的第一面。对象的属性是自定义的，这个对象中的内容会在renderScene方法中处理（备注：必须包含的属性，既component，表示需要渲染的页面组件）
//第二步 configureScene 场景渲染配置
//第三步  renderScene 渲染场景 参数（toute）第一步创建并设置给导航器的路由对象，navigator（导航器对象）实现给需要现实的组件设置属性
//从route对象中获取页面组件
var RNNavigator = React.createClass({
  render:function () {
    var rootRoute ={
      component:FirstPage
    };
    return(
      <Navigator
      initialRoute ={rootRoute}
      configureScene = {(route)=>{
        return Navigator.SceneConfigs.PushFromRight;
      }}
      renderScene = {(route,navigator)=>{
        var Component = route.component;
        return(
          <Component
          navigator = {navigator}
          route = {route}
      />
        );
      }}
    />
    );
  },
});
var styles = StyleSheet.create({
 flex:{
   flex:1,
   justifyContent:"center",
   alignItems:"center",
 },
 btn:{
   width:150,
   height:30,
   borderColor:"#0089FF",
   borderWidth:1,
   borderRadius:3,
   justifyContent:"center",
   alignItems:"center",
 },
});
//
module.exports = RNNavigator;
