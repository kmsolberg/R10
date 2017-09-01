import React from 'react';
import PropTypes from 'prop-types';

import ScheduleList from '../../components/ScheduleList/';

const Faves = ({ favesData, favesID }) => (
  <ScheduleList 
    sessionData={favesData}
    favesData={favesID}
    route={'faves'}
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
  favesID: PropTypes.arrayOf(PropTypes.shape({
    faved_on: PropTypes.date,
    id: PropTypes.string,
})).isRequired,
}

export default Faves;
