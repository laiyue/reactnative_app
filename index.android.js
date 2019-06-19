/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import LoginComponent from './src/components/login'
import MainComponent from './src/components/main'
import ProductListComponent from './src/components/productlist'
import { createStackNavigator } from 'react-navigation'
export default class myapp extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}
var myNavigator = createStackNavigator({
  'login': {
    screen: LoginComponent,
    navigationOptions: () => {
      return {
        title: "登录",
        headerTitleStyle: {
          color: 'red',
          textAlign: 'center',
          flex: 1
        }
      }
    }
  },
  'main': { screen: MainComponent },
  
  'productlist': {
    screen: ProductListComponent,
    navigationOptions: () => {
      return {
        title: "商品列表",
        headerTitleStyle: {
          color: 'red',
          textAlign: 'center',
          flex: 1
        }
      }
    }
  }



})

AppRegistry.registerComponent('myapp', () => myNavigator);
