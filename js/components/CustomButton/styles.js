import { StyleSheet, Platform } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.purple,
        height: 40,
        borderRadius: 40,
        padding: 20,
    },
    buttonText: {
        color: 'white',
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
    }
})