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
                <Schedule data={this.props.data} />
            )
        }
    }
}

ScheduleContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
    return {
        isLoading: state.session.isLoading,
        data: state.session.sessionData,
    }
}
export default connect(mapStateToProps)(ScheduleContainer);