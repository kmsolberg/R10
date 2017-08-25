import React from 'react';
import PropTypes from 'prop-types';
import { Text, SectionList, View, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { goToSession } from '../../lib/navigationHelpers';

const Schedule = ({ sessionData }) => (
    <SectionList
      style={styles.container}
      renderItem={({item}) => { 
        return (
          <TouchableOpacity onPress={() => goToSession('schedule', item)}>
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      }
      renderSectionHeader={(item) => {
        return <Text style={styles.sectionTitle}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
      }}
      sections={sessionData}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={() => <View style={styles.border} />}
    />
);

Schedule.propTypes = {
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
}

export default Schedule;
