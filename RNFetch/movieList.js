
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';
var Request_Url ='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'
var MovieList = React.createClass({
  getInitailState:function () {
    var ds  = new ListView.DataSourece({
      rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
    });
    return{
      loaded: false,
      dataSource: ds,
    };
  },
  render:function () {
    if(!this.state.loaded){
      return  this.renderLoadingView();
    }
    return(
       <ListView
       style = {styles.listView}
     dataSource ={this.state.dataSource}
   initialListSize = {10}
 renderHeader={this._renderHeader}
renderRow ={this._renderRow}
renderSepatator ={this._renderSeparator}/>
    );
  },
  componentDidMount:function () {
     this.getData();
  },
  getData:function () {
  fetch(Request_Url)
  .then((response)=>{
    return response.json();
  })
  .then((responseData)=>{
    this.setState({
      loaded: true,
      dataSource: this.state.dataSource.cloneWithRows(response.movies),
    });
  })
  .catch((error)=>{
    alert(error);
  });
},
  renderLoadingView: function () {
    return (
      <View style={styles.LoadingContainer}>
        <Text style = {styles.LoadingText}>Loading movies...</Text>
      </View>
    );
  },
_renderRow:function (movie) {
    return(
      <View
        style ={styles.textContainer}>
        <Image
           style = {styles.thumbnail}
          source = {{uri:movie.posters.thumbnail}}/>
        <View
          style = {styles.textContainer}>
          <Text
            style ={styles.title} >{movie.title}</Text>
          <Text
            style = {styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  },
_renderHeader:function () {
    return (
      <View
         style = {styles.header}>
        <Text
          style = {styles.headerText}>Movie List</Text>
        <View style = {styles.headerSeparator}></View>
      </View>
    );
  },
_renderSeparator:function (sectionID:number,rowID:number) {
    var style = {
      height:1,
      backgroundColor:"#CCCCCC",
    };
    return(
      <View
        style = {style}
        key = {sectionID+rowID}></View>
    );
  },
});
var styles = StyleSheet.create({
  LoadingContainer:{
    flex:1,
    marginTop:25,
    backgroundColor:"cyan",
    justifyContent:"center",
    alignItems:"center",
  },
  LoadingText:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    marginLeft:10,
    marginRight:10,
  },
  rowContainer:{
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
  textContainer:{
    flex:1,
    marginLeft:10,
  },
  title:{
    marginTop:3,
    fontSize:18,
    textAlign:"center",
  },
  year:{
    marginTop:3,
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
  },
  headerSeparator:{
    height:1,
    backgroundColor:"#CCCCCC",
  },
  listView:{
    marginTop:25,
    backgroundColor:"#F5FCFF",
  },
});
module.exports = MovieList;
