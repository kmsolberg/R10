import { StyleSheet } from 'react-native';

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
        fontFamily: typography.fontMain,
        margin: 10,
    },
    itemLocation: {
        fontFamily: typography.fontMain,
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
});

