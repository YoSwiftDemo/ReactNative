import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Navigator,
} from 'react-native';
//

//从前一个页面向后面一个页面传值
var InputPage = React.createClass({
  render:function () {
    return(
      <View
          style ={inputStyles.container}>
        <TextInput
        style ={inputStyles.input}
        placeholder = "请输入内容"
       onChangeText  = {this.getInputContent}/>
        <TouchableOpacity
          style = {inputStyles.btn}
           onPress = {this.pushNextPage}>
          <Text>进入下一页</Text>
        </TouchableOpacity>
      </View>
    );
  },
  //记录输入框的值
  getInitialState:function () {
    return {
      content:" "
    };
  },
  //将输入框的值进行记录
  getInputContent:function (inputText) {
    this.setState({
      content:inputText
    });
  },
  //btn事件 推出下一级界面 并且传值
  pushNextPage:function () {
    var route ={
      component:DetailPage,
      passProps:{
        showText:this.state.content
      }
    };
     this.props.navigator.push(route);
  },
});
//

//
var inputStyles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
  },
  input:{
    height:45,
    marginLeft:25,
    marginRight:25,
    paddingLeft:5,
    borderWidth:1,
    borderColor:"black",
    borderRadius:4,
  },
  btn:{
    marginTop:20,
    borderWidth:30,
    borderRadius:4,
    borderColor:"black",
    padding:5,
    justifyContent:"center",
    alignItems:"center",
  },
});
//DetailPage 显示文本 按钮

var DetailPage = React.createClass({
  render:function(){
        return(
    <View
      style ={detailStyles.container}>
      <Text
        style= {detailStyles.text}
        >{this.props.showText}</Text>
      <TouchableOpacity
        style ={ detailStyles.btn}
         onPress ={this.popFrontPage}>
        <Text>返回上一页</Text>
      </TouchableOpacity>
    </View>
  );
  },
  popFrontPage:function () {
  this.props.navigator.pop();
  },
});
//
var detailStyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
  },
  text:{
    marginLeft:25,
    marginRight:25,
    padding:25,
    backgroundColor:"cyan",
    fontSize:20,
    textAlign:"center",
  },
  btn:{
    marginTop:20,
    borderWidth:30,
    borderRadius:4,
    borderColor:"black",
    padding:5,
    justifyContent:"center",
    alignItems:"center",
  },
});

//
var RNNavigator = React.createClass({
  render:function () {
    var rootRoute = {
      component:InputPage,
      passProps:{
      }
    };
    return(
      <View
        style = {{flex:1}}>
        <Navigator
        initialRoute = {rootRoute}
      configureScene ={(route)=>{
        return Navigator.SceneConfigs.PushFromRight;
      }}
      renderScene={(route,navigator)=>{
        var Component = route.component;
        return(
          <Component
          navigator = {navigator}
        route = {route}
        {...route.passProps}
        />
        );
      }}
     />
      </View>
    );
  },

});
//
var styles = StyleSheet.create({

});

//
module.exports = RNNavigator;
