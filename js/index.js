import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar, 
  Platform
} from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigation, NavigationProvider, NavigationContext, NavigationStyles } from '@expo/ex-navigation';

import { Router } from './navagation/routes';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})
export default class R10 extends Component {

  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation 
            navigatorUID="root"
            initialRoute={Router.getRoute('navigationBar')} 
            defaultRouteConfig={{
              styles: { ...NavigationStyles.SlideVertical }
            }}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
