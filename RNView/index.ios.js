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
 var RNView = React.createClass({
   render:function () {
     return (
       <View style = {[styles.container,styles.flex]}>
         <View style = {styles.item}>

           <View style = {[styles.flex,styles.center]}>
             <Text>酒店</Text>
           </View>

           <View style = {[styles.flex,styles.lineLeftRight]}>

             <View style = {[styles.flex,styles.center,styles.lineCenter]}>
               <Text>海外酒店</Text>
             </View>
             <View style = {[styles.flex,styles.center]}>
              <Text> 特价酒店</Text>
             </View>
           </View>
           <View style = {styles.flex}>
             <View style = {[styles.flex,styles.center,styles.lineCenter]}>
               <Text>团购</Text>
             </View>
             <View style = {[styles.flex,styles.center]}>
                <Text>民宿.客栈</Text>
             </View>
           </View>
         </View>
       </View>
   );
   }
 });
//样式
 var styles = StyleSheet.create({
   container:{
     marginTop:25,
     backgroundColor:"#F2F2F2",
   },
   //多个组件都需要设置
   flex:{
     flex:1,
   },
   //多个组件需要设置
   center:{
     justifyContent:"center",
     alignItems:"center",
   },
   item:{
     flexDirection:"row",
     backgroundColor:"#FF607C",
     marginTop:5,
     marginLeft:5,
     marginRight:5,
     height:80,
     borderRadius:5,
   },
   //就是设置需求的白线  注意重叠问题
   //给中间的区域设置左右边线
  lineLeftRight:{
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:"white",
  },
  //给上半区域设置边线
  lineCenter:{
    borderBottomWidth:1,
    borderColor:"white",
  },
 });
AppRegistry.registerComponent('RNView', () => RNView);
