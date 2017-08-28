import { StyleSheet, Platform } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    speakerPic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    speaker: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        marginTop: 10,
        paddingBottom: 20,
    },
    sessionLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 5,
    },
    greyText: {
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
        color: colors.mediumGrey
    },
    sessionTitle: {
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
        fontSize: 24,
        marginBottom: 10,
    },
    time: {
        color: colors.red,
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
        marginBottom: 10,
        marginTop: 8,
    },
    description: {
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMainLight,
                letterSpacing: 1,
            },
            android: {
                fontFamily: typography.fontMainLight,
            },
        }),
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 22.5,
    },
    speakerName: {
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
        paddingLeft: 10,
    },
    buttonContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
