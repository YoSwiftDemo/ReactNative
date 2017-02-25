//引入  Image,
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
//数据源 才用本地数据 JSON数据 网址址https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
http://old.qqe2.com/
//组件
//从文件中读取数据  require执行了JSON.parse()将JSON格式的字符串转化为json格式对象
var movieData = require("./data.json");
//获取moives的数据。属性movies是个数组
var movies = movieData.movies;
//创建电影列表组件，根据movies中元素的个数，创建对应的组件
//遍历数组，每当获取一个move对象，就创建一个组件对象，样式一样，显示内容不一样
//定义空数组，存储显示电影信息 的组件
//遍历数组 获取movie对象
//创建组件  显示电影的信息 图像（movie.posters.thumbnail） 电影名称(movie.title) 上映时间(movie.year)
//将创建的组件存到数组中
var MovieList = React.createClass({

 render:function () {
   var moviesRows = [];
   for (var i in movies) {
       var  movie = movies[i];
       var row = (
         <View
           style ={styles.row} key = {i}>
           <Image
             style = {styles.thumbnail}
             source = {{uri:movie.posters.thumbnail}}
           />
           <View
             style= {styles.rightContainer}>
             <Text
               style = {styles.title}
               >{movie.title}</Text>
             <Text
               style= {styles.year}
               >{movie.year}</Text>
           </View>
         </View>
       );
       moviesRows.push(row);
   }
   return(
     <View  style = {styles.container}>
       <ScrollView style = {styles.scrollView}>
         {
           moviesRows
         }
       </ScrollView>
     </View>
   );
 },
});
//样式
var styles = StyleSheet.create({
  container: {
    flex:1,
  },
  scrollView:  {
    flex:1,
    marginTop:25,
    backgroundColor:"#F5FCFF",
  },
row:{
  flexDirection:"row",
  padding:5,
  alignItems:"center",
  backgroundColor:"#F5FCFF",
},
thumbnail:{
  width:53,
  height:81,
  backgroundColor:"gray",
},
rightContainer:{
  marginLeft:10,
  flex:10,
},
title:{
  fontSize:18,
  marginTop:3,
  marginBottom:3,
  textAlign:"center",
},
year:{
  marginBottom:3,
  textAlign:"center",
},

});
//导出模块
module.exports = MovieList;
