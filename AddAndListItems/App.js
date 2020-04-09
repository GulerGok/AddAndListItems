import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
// we will use these two screens later in our AppNavigator
import AddItem from './screens/AddItem';
import List from './screens/List';

export default createStackNavigator({
  Home: {
    screen: Home,
  },
  AddItem: {
    screen: AddItem,
  },
  List: {
    screen: List,
  }
  ,
    initialRouteName: 'Home',
  
});

 class App extends React.Component {
  // create the title for the screen
  static navigationOptions = {
    title: 'App',
  };
   render() {
    return ;
  }
  }

