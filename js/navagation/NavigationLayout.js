import React, { Component } from 'react';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem,
  } from '@expo/ex-navigation';

import { Router } from './routes';

class NavigationLayout extends Component {

    static route = {
        navigationBar: {
          visible: false,
        }
      }

    render() {
        return (
            <TabNavigation
            id="main"
            navigatorUID="main"
            initialTab="about">
                <TabItem
                    id="schedule"
                    title="Schedule"
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </TabItem>

                <TabItem
                    id="faves"
                    title="Faves"
                >
                    <StackNavigation
                        id="faves"
                        navigatorUID="faves"
                        initialRoute={Router.getRoute('faves')}
                    />
                </TabItem>

                <TabItem
                    id="about"
                    title="About"
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                    />
                </TabItem>
            </TabNavigation>
        )
        //Render the tab bar component
        // With nested tab items and stack navs
    }

}

export default NavigationLayout;