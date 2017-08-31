import { StyleSheet, Platform,   Dimensions,
} from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width),
        height: 200,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 75,
        height: 40,
        borderRadius: 20,
        marginTop: 20,
        // padding: 20,
        width: 180,
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
        backgroundColor: 'transparent',
        margin: 10,
    }
})