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
                drawerWidth={300}
                renderHeader={this._renderHeader}
            >
                <DrawerNavigationItem
                    id='schedule'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Schedule', isSelected)}
                    renderIcon={(isSelected) => this.renderIcon("md-calendar", isSelected)}
                    style={styles.drawer}
                >
                    <StackNavigation
                        id='schedule'
                        initialRoute={Router.getRoute('schedule')}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='faves'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Faves', isSelected)}
                    renderIcon={(isSelected) => this.renderIcon("md-heart", isSelected)}
                >
                    <StackNavigation
                        id='faves'
                        initialRoute={Router.getRoute('faves')}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='about'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('About', isSelected)}
                    renderIcon={(isSelected) => this.renderIcon("md-information-circle", isSelected)}
                >
                    <StackNavigation
                        id='about'
                        initialRoute={Router.getRoute('about')}
                    />
                </DrawerNavigationItem>

            </DrawerNavigation>
        );
    }

    _renderHeader = () => {
        return (
            <View style={styles.header}>
            </View>
        );
    };

    _renderTitle(text, isSelected) {
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
        height: 20
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
