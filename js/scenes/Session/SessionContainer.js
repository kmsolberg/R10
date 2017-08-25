import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import Session from './Session';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Session',
        }
    };

    render() {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <Session sessionData={this.props.sessionData} />;
        }
    }
}

SessionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
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

export default (SessionContainer);
