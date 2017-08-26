import { StyleSheet, Platform } from 'react-native';

import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
              fontFamily: typography.fontMain,
            },
            android: {
              fontFamily: typography.fontMainAnd,
            },
          }),
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
    },
    aboutHeader: {
        fontWeight: 'bold',
    },
    list: {
        margin: 10,
    },
});