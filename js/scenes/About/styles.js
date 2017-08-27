import { StyleSheet, Platform } from 'react-native';

import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        marginRight: 10,
        marginLeft: 10,
    },
    logo: {
        height: 42,
        width: 173,
    },
    aboutInfo: {
        margin: 10,
    },
    aboutText: {
        marginTop: 10,
        marginBottom: 10,
        ...Platform.select({
            ios: {
              fontFamily: typography.fontMain,
            },
            android: {
              fontFamily: typography.fontMainAnd,
            },
          }),
    },
    aboutHeader: {
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
              fontFamily: typography.fontMain,
            },
            android: {
              fontFamily: typography.fontMainAnd,
            },
          }),
    },
    list: {
        margin: 10,
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
    },
    copyright: {
        margin: 10,
        marginBottom: 15,
    },
});