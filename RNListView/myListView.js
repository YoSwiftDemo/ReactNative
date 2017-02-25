// 引入  ListView,
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
// 组件
// ListView 数据列表
//  ListView  最重要的是设置每行的显示的组件
// section，header
// 使用ListView.DataSoure给它传递一个普通的数组，在使用ListView.DataSoure对象实例化一个ListView组件
// ListView实现：row／section组件定义，设置数据
// 设置ListView数据源时借助state 将dataSoure对象社孩子为state的属性 ListView会根据数据源进行渲染
// 原始数据是个 数组(字符串)
var contents = [
  "梁文博",
  "丁旭鹏",
  "党晓银",
  "陈彦涛",
  "陈磊",
  "胡发全",
  "张云超",
  "岳克奎",
];
// 创建dataSource对象
//通过判断决定渲染那些行组件，避免全部渲染，提高渲染效率
//设置dataSource，不直接使用原始数据，使用cloneWithRows对数据源进行复制，使用复制后的数据源实例化ListView。好处：当原始数据发生变化时，ListView组件的dataSource不会主动改变
// _renderRow渲染行组件 参数是每行要显示的数据对象
var MyListView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged:(oldRow,newRow)=> oldRow !==newRow
    });
   return{
     dataSource:ds.cloneWithRows(contents)
   };
 },
  _renderRow:function (rowData:string) {
    return(
      <View
         style = {styles.row}>
        <Text
          style = {styles.content}>
          {rowData}
        </Text>
      </View>
    );
  },
  render:function () {
    return(
       <ListView
          style = {styles.container}
          dataSource = {this.state.dataSource}
          renderRow = {this._renderRow}
        />);
  }
});
var styles = StyleSheet.create({
   container:{
     flex:1,
     marginTop:25,
   },
   row:{
     justifyContent:"center",
     alignItems:"center",
     padding:5,
     height:100,
     borderBottomWidth:1,
     borderColor:"#CCCCCC",
   },
   content:{
     flex:1,
     fontSize:20,
     color:"blue",
     lineHeight:100,
   },
});
module.exports =  MyListView;
