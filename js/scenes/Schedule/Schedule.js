import React from 'react';
import PropTypes from 'prop-types';
import { Text, SectionList, View, ListItem, TouchableOpacity, popSession } from 'react-native';
import Moment from 'moment';

import { styles } from './styles';

const renderItem = (item) => {
    return <Text>{item.data.title}</Text>
}

const renderHeader = (headerItem) => {
    return <Text>{headerItem.item.title}</Text>
}

const Schedule = ({ data }) => (
    <SectionList
      renderItem={({item}) => { 
        return (
          <TouchableOpacity onPress={() => popSession(item)}>
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
      sections={data}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={() => <View style={styles.border} />}
    />
);

export default Schedule;
