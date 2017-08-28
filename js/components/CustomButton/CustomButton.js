import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const CustomButton = ({ title }) => (
    <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </View>
);

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    faveFunc: PropTypes.func.isRequired,
}

export default CustomButton;
