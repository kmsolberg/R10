import { StyleSheet, Dimensions } from 'react-native';

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
        borderColor: '#e6e6e6',
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