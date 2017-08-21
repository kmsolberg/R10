import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

const About = () => (
    <View>
        <Image 
            source={require('../../assets/images/r10_logo.png')}
        />
        <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={styles.header}>Date & Venue</Text>
        <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
        <Text style={styles.header}>Code of Conduct</Text>
    </View>
);

About.propTypes = {

}

export default About;
