import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, SectionList } from 'react-native';
import Moment from 'moment';


import { styles } from './styles';
import { goToSession } from '../../lib/navigationHelpers';

const Faves = ({favesData}) => (
    <SectionList
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
      sections={favesData}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={() => <View style={styles.border} />}
    />
);

Faves.propTypes = {

};

export default Faves;
