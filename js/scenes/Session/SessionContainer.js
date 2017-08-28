import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import Session from './Session';
import { fetchSpeakers } from '../../redux/modules/speakers';

class SessionContainer extends Component {

    findFave() {
        let isFave = false;
        const faves = this.props.favesData;

        if(faves.find(el => this.props.sessionData.session_id === el.id)) {
            isFave = true
        }
        return isFave
    }

    static route = {
        navigationBar: {
            title: 'Session',
        }
    };

    componentDidMount() {
        this.props.dispatch(fetchSpeakers(this.props.sessionData.speaker))
    }
    
    render() {
        const faves = this.findFave();

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
    }
}
export default connect(mapStateToProps)(SessionContainer);
