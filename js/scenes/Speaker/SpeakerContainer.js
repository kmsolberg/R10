import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

    static route = {
        navigationBar: {
            visible: false
        }
    };
    
    render() {
        return <Speaker speakerData={this.props.speakerData}/>;
    }
}

SpeakerContainer.propTypes = {
    speakerData: PropTypes.shape({
        bio: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        session: PropTypes.string,
        speaker_id: PropTypes.string,
        url: PropTypes.string,
    }).isRequired
}

export default SpeakerContainer;
