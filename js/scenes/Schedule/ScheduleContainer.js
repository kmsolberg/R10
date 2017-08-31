import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchSessions } from '../../redux/modules/sessions';
import { fetchFaveIds } from '../../redux/modules/faves';
import Schedule from './Schedule';
import realm from '../../config/models';

class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Schedule',
        }
    };

    componentDidMount() {
        this.props.dispatch(fetchSessions())
        this.props.dispatch(fetchFaveIds())
        realm.addListener('change', () => this.props.dispatch(fetchFaveIds()));
    }

    render() {
        
        if (this.props.isLoading) {
            return (
             <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <Schedule 
                    sessionData={this.props.data}
                    favesData={this.props.faves} 
                />
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
        faves: state.faves.favesID,
    }
}
export default connect(mapStateToProps)(ScheduleContainer);