import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

    static route = {
        navigationBar: {
            visible: false
        }
    };
    
    static PropTypes = {

    };

    render() {
        return <Speaker speakerData={this.props.speakerData}/>;
    }
}

export default SpeakerContainer;
