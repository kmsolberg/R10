import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

import { styles } from './styles';
import { colors } from '../../config/styles'
import { addFave } from '../../config/models';
import { realm } from '../../config/models';

const Session = ({ sessionData }) => (
    <View>
        <Text>
            {sessionData.description}
        </Text>
        <Button
            onPress={addFave(sessionData.session_id)}
            title="Add to Faves"
            color={colors.purple}
            accessibilityLabel="Add to your favourites"
        />
    </View>
);

Session.propTypes = {
    sessionData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.number,
        object: PropTypes.shape({
            description: PropTypes.string,
            location: PropTypes.string,
            session_id: PropTypes.string,
            speaker: PropTypes.string,
            start_time: PropTypes.number,
            title: PropTypes.string,
        }),
    })).isRequired
};

export default Session;
