import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Speaker',
        }
    };
    
    static PropTypes = {

    };

    render() {
        return <Speaker />;
    }
}

export default SpeakerContainer;
