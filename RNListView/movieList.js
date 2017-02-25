// 引入  ListView,  Image,
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';
//从文件中读取数据
var movieData = require("./data.json");
//获取所有movies数据  属性movies是个数组
//原始数据
var movies = movieData.movies;
var MoviesList = React.createClass({
  getInitialState:function () {
    var ds = new ListView.DataSource({
      rowHasChanged:(oldRow,newRow) => oldRow !== newRow
    });
    return{
      dataSource:ds.cloneWithRows(movies)
    };
  },
  //渲染行组件
  _renderRow:function (movie) {
    return(
      <View
        style = {styles.row}>
        <Image
          style = {styles.thumbnail}
        soure = {{uri:movie.posters.thumbnail}}/>
        <View
          style = {styles.rightContainer}>
          <Text
            style = {styles.title}>{movie.title}</Text>
          <Text
            style = {styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  },
  //渲染头部
  _renderHeader:function () {
    return(
    <View
      style = {styles.header}>
      <Text
        style ={styles.headerText}>Movies List</Text>
      <View
        style = {styles.separator}></View>
    </View>
  );
  },
  //渲染分割线
  _RenderSeparator:function (sectionID:number,rowID:number) {
    return(
      <View
        style = {styles.separator} key = {sectionID+rowID}></View>
    );
  },
  render:function () {
    return(
      <ListView
         style = {styles.listView}
      dataSoure = {this.state.dataSoure}
    renderRow = {this._renderRow}
  renderHeader = {this._renderHeader}
renderSeparator ={this._RenderSeparator}
initalListSize = {10}/>
    );
  },
});
//style
var styles = StyleSheet.create({
  listView :{
    marginTop:25,
    flex:1,
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
   flex:1,
 },
 title:{
   fontSize:10,
   marginTop:3,
   marginBottom:3,
   textAlign:"center",
  },
  year:{
    marginBottom:3,
    textAlign:"center",
  },
  header:{
    height:44,
    backgroundColor:"#F5FCFF",
  },
  headerText:{
    flex:1,
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    lineHeight:44,
  },
separator:{
  height:1,
  backgroundColor:"#CCCCCC",
},

});
module.exports = MoviesList;
