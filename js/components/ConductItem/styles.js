import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    aboutInfo: {
        margin: 10,
        flexDirection: 'row',
    },
    itemTitle: {
        color: colors.purple,
        fontFamily: typography.fontMainLight,
    },
    item: {
        fontFamily: typography.fontMainLight,
    },
});