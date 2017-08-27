import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from '../../config/styles'
import { addFave, getFaves } from '../../config/models';

const faves = getFaves()

const Session = ({ sessionData, speakerData }) => (
    <View style={styles.container}>
        <View style={styles.sessionLocation}>
            <Text style={styles.greyText}>{sessionData.location}</Text>
            {faves.find(el => sessionData.session_id === el.id) &&
                <Icon name={"ios-heart"} color="red" />
            }
        </View>
        <Text style={styles.sessionTitle}>{sessionData.title}</Text>
        <Text style={styles.time}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text style={styles.description}>{sessionData.description}</Text>
        <Text style={styles.greyText}>Presented by:</Text>
        <TouchableOpacity>
            <View style={styles.speaker}>
                <Image
                    style={styles.speakerPic}
                    source={{uri: speakerData.image}}
                />
                <Text style={styles.speakerName}>{speakerData.name}</Text>
            </View>
        </TouchableOpacity>
        <Button
            //onPress={addFave(sessionData.session_id)}
            title="Add to Faves"
            color={colors.purple}
            accessibilityLabel="Add to your favourites"
        />
    </View>
);

Session.propTypes = {
    sessionData: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.number,
        object: PropTypes.shape({
            description: PropTypes.string,
            location: PropTypes.string,
            session_id: PropTypes.string,
            speaker: PropTypes.string,
            start_time: PropTypes.number,
            title: PropTypes.string,
        }),
    })).isRequired,
    speakerData: PropTypes.objectOf({
        bio: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        session: PropTypes.string,
        speaker_id: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

export default Session;
