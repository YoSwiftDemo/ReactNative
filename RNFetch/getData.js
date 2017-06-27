//引入  TouchableOpacity,
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

var GetData = React.createClass({
  render:function () {
    return (
      <View
         style = {styles.container}>
        <TouchableOpacity
          style = {styles.btn}
          onPress ={getRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php?username=yue&password=123456")}>

          <Text>Get</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style = {styles.btn}
            onPress = {postRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
              <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
//Get 请求
function getRequest(url){
  var opts ={
    method:"GET"
  }
  fetch(url,opts)
  .then((response)=>{
    return response.text();//返回一个带有文本的对象
  })
  .then((responseText)=>{
    alert(responseText);
  })
  .catch((error)=>{
    alert(error);
  })
}
//POST
function postRequest(url) {
  //将key=Value 封装成Formda形式
  let formData = new FormData();
  formData.append("username","reactnative");
  formData.append("password","456");
  var opts ={
    method:"POST",
    body:formData,
  }
  fetch(url,opts)
  .then((response)=>{
    return response.text();
  })
  .then((responseText)=>{
    alert(responseText);
  })
  .catch((error)=>{
    alert(error);
  })
}
//样式
var styles =StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    backgroundColor:"cyan",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  btn:{
    width:60,
    height:30,
    borderWidth:1,
    borderRadius:3,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center",
  },
});
//导出
module.exports = GetData;
