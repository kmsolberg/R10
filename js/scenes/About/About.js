import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, FlatList } from 'react-native';

import { styles } from './styles';

const About = ({ data }) => (
    <View>
        <Image 
            source={require('../../assets/images/r10_logo.png')}
        />
        <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={styles.header}>Date & Venue</Text>
        <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
        <Text style={styles.header}>Code of Conduct</Text>
        <FlatList 
            data={data}
            renderItem={({item}) => 
                <View>
                    <Text style={styles.item}>{item.title}</Text>
                    <Text style={styles.item}>{item.description}</Text>
                </View>
            }
            keyExtractor={(item, index) => index}
        />
    </View>
);

About.propTypes = {

}

export default About;
