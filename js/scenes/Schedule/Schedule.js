import React from 'react';
import PropTypes from 'prop-types';

import ScheduleList from '../../components/ScheduleList/';

const Schedule = ({ sessionData, favesData }) => (
  <ScheduleList
    sessionData={sessionData}
    favesData={favesData}
    route={'schedule'}
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
  })).isRequired,
  favesData: PropTypes.arrayOf(PropTypes.shape({
    faved_on: PropTypes.date,
    id: PropTypes.string,
  })).isRequired,
}

export default Schedule;
