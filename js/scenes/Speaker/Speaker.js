import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import CustomButton from '../../components/CustomButton/';
import { popSpeaker } from '../../lib/navigationHelpers';

const Speaker = ({speakerData}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => popSpeaker()}>
            {Platform.OS === 'ios' &&
                <Icon name={"ios-close"} color="white" size={36} />
            }
            {Platform.Version === 24 &&
                <Icon name={"md-close"} color="white" size={36} />
            }
            </TouchableOpacity>
            <Text style={styles.headerText}>About the Speaker</Text>
        </View>
        <ScrollView style={styles.whiteCard}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.speakerPic}
                    source={{ uri: speakerData.image }}
                />
            </View>
            <Text style={styles.speakerName}>{speakerData.name}</Text>
            <Text style={styles.bio}>{speakerData.bio}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => Linking.openURL(`${speakerData.url}`).catch(err => console.error('An error occurred', err))}
                    style={styles.button}
                >
                    <CustomButton title="Read More on Wikipedia"/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
);

Speaker.propTypes = {

};

export default Speaker;
