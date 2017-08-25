import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchSessions } from '../../redux/modules/sessions';
import Schedule from './Schedule';

class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Schedule',
        }
    };

    componentDidMount() {
        this.props.dispatch(fetchSessions())
    }

    render() {
        if (this.props.isLoading) {
            return (
             <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <Schedule sessionData={this.props.data} />
            )
        }
    }
}

ScheduleContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
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

function mapStateToProps(state) {
    return {
        isLoading: state.session.isLoading,
        data: state.session.sessionData,
    }
}
export default connect(mapStateToProps)(ScheduleContainer);