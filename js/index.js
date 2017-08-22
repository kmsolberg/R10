import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigation, NavigationProvider } from '@expo/ex-navigation';

import { Router } from './navagation/routes';

export default class R10 extends Component {
  
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation navigationUID="root" id="root" initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
