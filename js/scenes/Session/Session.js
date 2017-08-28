import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from '../../config/styles';
import CustomButton from '../../components/CustomButton/index';
import { addFave, removeFave } from '../../config/models';
import { goToSpeaker } from '../../lib/navigationHelpers';

const addButton = 'Add to Faves'
const deleteButton = "Remove from Faves"

const Session = ({ sessionData, speakerData, isFave }) => (

    <ScrollView style={styles.container}>
        <View style={styles.sessionLocation}>
            <Text style={styles.greyText}>{sessionData.location}</Text>
            {isFave &&
                <Icon name={"ios-heart"} color={colors.red} />
            }
        </View>
        <Text style={styles.sessionTitle}>{sessionData.title}</Text>
        <Text style={styles.time}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text style={styles.description}>{sessionData.description}</Text>
        <Text style={styles.greyText}>Presented by:</Text>
        <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
            <View style={styles.speaker}>
                <Image
                    style={styles.speakerPic}
                    source={{ uri: speakerData.image }}
                />
                <Text style={styles.speakerName}>{speakerData.name}</Text>
            </View>
        </TouchableOpacity>
        {isFave ? (
            <TouchableOpacity onPress={() => removeFave(sessionData.session_id)}>
                <CustomButton
                    title={deleteButton}
                />
            </TouchableOpacity>
        ) : (
                <TouchableOpacity onPress={() => addFave(sessionData.session_id)}>
                    <CustomButton
                        title={addButton}
                    />
                </TouchableOpacity>
            )
        }
    </ScrollView>
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
    speakerData: PropTypes.shape({
        bio: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        session: PropTypes.string,
        speaker_id: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

export default Session;
