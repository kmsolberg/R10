import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { styles } from './styles';

const Session = ({sessionData}) => (
    <View>
        <Text>
            {sessionData.description}
        </Text>
    </View>
);

Session.propTypes = {

};

export default Session;
