import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Faves from './Faves';

class FavesContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Faves',
        }
    };
    
    static PropTypes = {

    };

    render() {
        return <Faves />;
    }
}

export default FavesContainer;
