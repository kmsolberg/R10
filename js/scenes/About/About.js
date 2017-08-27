import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';

import { styles } from './styles';
import ConductItem from '../../components/ConductItem/';

const About = ({ data }) => (
    <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                source={require('../../assets/images/r10_logo.png')}
                style={styles.logo}
            />
        </View>
        <View style={styles.aboutInfo}>
            <Text style={styles.aboutText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
            <Text style={styles.aboutHeader}>Date & Venue</Text>
            <Text style={styles.aboutText}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
            <Text style={styles.aboutHeader}>Code of Conduct</Text>
        </View>
        <FlatList 
            data={data}
            style={styles.list}
            renderItem={({item}) => 
                <ConductItem data={item} />
            }
            keyExtractor={(item, index) => index}
        />
        <Text style={styles.copyright}>&copy; RED Academy 2017</Text>
    </ScrollView>
);

About.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string
      })).isRequired
}

export default About;
