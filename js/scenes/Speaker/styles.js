import { StyleSheet, Platform } from 'react-native';

import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        color: 'white',
        height: 30,
        width: 220,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        marginTop: 40,
    },
    headerText: {
        color: 'white',
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 7,
    },
    whiteCard: {
        backgroundColor: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    imageContainer: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    speakerPic: {
        height: 100,
        width: 100,
        borderRadius: 50,
        padding: 15,
    },
    speakerName: {
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMain,
            },
            android: {
                fontFamily: typography.fontMainAnd,
            },
        }),
        fontSize: 24,
        textAlign: 'center',
    },
    bio: {
        padding: 20,
        ...Platform.select({
            ios: {
                fontFamily: typography.fontMainLight,
            },
            android: {
                fontFamily: typography.fontMainLight,
            },
        }),
        lineHeight: 21,
    },
    buttonContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginBottom: 20,
    },
});
