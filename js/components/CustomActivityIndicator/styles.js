import { StyleSheet, Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: (Dimensions.get('window').height),
        width: (Dimensions.get('window').width),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})