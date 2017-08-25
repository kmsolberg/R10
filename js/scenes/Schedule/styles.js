import { StyleSheet, Platform } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    sectionTitle: {
        backgroundColor: colors.lightGrey,
        fontFamily: typography.fontMain,
        padding: 5,
        paddingLeft: 10,
        fontSize: 12,
    },
    itemTitle: {
        margin: 10,
    },
    itemLocation: {
        color: colors.mediumGrey,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 12,
    },
    border: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.lightGrey,
      },
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
    }
});

