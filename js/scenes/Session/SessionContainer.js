import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Session from './Session';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Session',
        }
    };
    
    static PropTypes = {

    };

    render() {
        return <Session />;
    }
}

export default SessionContainer;
