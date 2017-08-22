import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigation, NavigationProvider, NavigationContext } from '@expo/ex-navigation';

import { Router } from './navagation/routes';
import { Store } from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})
export default class R10 extends Component {

  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation navigationUID="root" id="root" initialRoute={Router.getRoute('navigationBar')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

 