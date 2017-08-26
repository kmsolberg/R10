import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, SectionList } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { goToSession } from '../../lib/navigationHelpers';

const Faves = ({ favesData }) => (
  <SectionList
    renderItem={({ item }) => {
      return (
        <TouchableOpacity onPress={() => goToSession('schedule', item)}>
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.location}>
              <Text style={styles.itemLocation}>{item.location}</Text>
              <Icon name={"ios-heart"} color="red" />
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    }
    renderSectionHeader={(item) => {
      return <Text style={styles.sectionTitle}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
    }}
    sections={favesData}
    keyExtractor={item => item.title}
    ItemSeparatorComponent={() => <View style={styles.border} />}
  />
);

Faves.propTypes = {
  favesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.number.isRequired,
    object: PropTypes.shape({
      description: PropTypes.string,
      location: PropTypes.string,
      session_id: PropTypes.string,
      speaker: PropTypes.string,
      start_time: PropTypes.number,
      title: PropTypes.string,
    }),
  })).isRequired,
}

export default Faves;
