import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import {styles} from './styles';

function CustomActivityIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size="small" color="black" />
        </View>
    )
}

export default CustomActivityIndicator
