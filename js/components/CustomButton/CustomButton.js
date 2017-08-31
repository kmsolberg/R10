import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { colors } from '../../config/styles';

const CustomButton = ({ title }) => (
    <View style={styles.buttonContainer}>
        <LinearGradient
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            colors={[colors.blue, colors.purple]}
            style={[StyleSheet.absoluteFill, styles.button]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
    </View>
);

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
}

export default CustomButton;
