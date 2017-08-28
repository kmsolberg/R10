import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import Session from './Session';
import { fetchSpeakers } from '../../redux/modules/speakers';
import { fetchFaveIds } from '../../redux/modules/faves';
import { findFave } from '../../lib/helperFunctions';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Session',
        }
    };

    componentDidMount() {
        this.props.dispatch(fetchSpeakers(this.props.sessionData.speaker))
        this.props.dispatch(fetchFaveIds())
    }

    render() {
        const faves = findFave(this.props.faveIds, this.props.sessionData);

        if (this.props.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <Session 
                sessionData={this.props.sessionData}
                speakerData={this.props.speakerData}
                isFave={faves}
            />;
        }
    }
}

SessionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    sessionData: PropTypes.objectOf(PropTypes.shape({
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
    speakerData: PropTypes.objectOf(
        PropTypes.shape({
            bio: PropTypes.string,
            image: PropTypes.string,
            name: PropTypes.string,
            session: PropTypes.string,
            speaker_id: PropTypes.string,
            url: PropTypes.string,
        })
    ).isRequired
}

function mapStateToProps(state) {
    return {
        isLoading: state.speakers.isLoading,
        speakerData: state.speakers.speakerData,
        favesData: state.faves.favesData,
        faveIds: state.faves.favesID,
    }
}
export default connect(mapStateToProps)(SessionContainer);
