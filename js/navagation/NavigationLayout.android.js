import React, { Component } from 'react';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@expo/ex-navigation';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Router } from './routes';

import { colors, typography } from '../config/styles';

const defaultRouteConfig = {
    navigationBar: {
        backgroundColor: colors.purple,
        tintColor: 'white',
    },
    // renderBackground: () => (
    //     // returning some component for the background...
    // );
}
class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    };

    render() {
        return (
            <DrawerNavigation
                id='main'
                initialItem='about'
                drawerWidth={150}
                renderHeader={this.renderHeader}
            >
                <DrawerNavigationItem
                    id='schedule'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
                    renderIcon={(isSelected) => this.renderIcon("md-calendar", isSelected)}
                    style={styles.drawer}

                >
                    <StackNavigation
                        id='schedule'
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='faves'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this.renderTitle('Faves', isSelected)}
                    renderIcon={(isSelected) => this.renderIcon("md-heart", isSelected)}
                >
                    <StackNavigation
                        id='faves'
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='about'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this.renderTitle('About', isSelected)}
                    renderIcon={(isSelected) => this.renderIcon("md-information-circle", isSelected)}
                >
                    <StackNavigation
                        id='about'
                        initialRoute={Router.getRoute('about')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </DrawerNavigationItem>

            </DrawerNavigation>
        );
    }

    renderHeader = () => {
        return (
            <View style={styles.header}>
            </View>
        );
    };

    renderTitle(text, isSelected) {
        return (
            <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
                {text}
            </Text>
        );
    }

    renderIcon(iconName, isSelected) {
        const color = isSelected ? colors.purple : colors.mediumGrey;
        return <Icon name={iconName} size={24} color={color} />
    }
}

const styles = StyleSheet.create({
    header: {
        height: 20,
    },

    selectedItemStyle: {
        backgroundColor: colors.lightGrey,
    },

    titleText: {
        fontWeight: 'bold',
        fontFamily: typography.fontMainAnd,
    },

    selectedTitleText: {
        color: colors.purple,
    }
});

export default NavigationLayout;
