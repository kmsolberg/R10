import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import {styles} from './styles';

const CustomActivityIndicator = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size="small" color="black" />
        </View>
    )
}

export default CustomActivityIndicator
