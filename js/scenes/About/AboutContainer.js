import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import About from './About';

class AboutContainer extends Component {
    
    constructor() {
        super();
        this.state = {
          data: [],
          isLoading: true,
        };
      }
    
      componentDidMount() {
        let endpoint = 'https://robot-data.firebaseio.com/robots.json';
        fetch(endpoint)
          // if fetch is successful, read our JSON out of the response
          .then(response => response.json())
          .then(data => {
            this.setState({ data });
          })
          .catch(error => console.log(`Error fetching JSON: ${error}`));
      }
    
      componentDidUpdate() {
        if ( this.state.data && this.state.isLoading ) {
          this.setState({ isLoading: false });
        }
      }

    static PropTypes = {

    };

    render() {
        if (this.state.isLoading) {
            return (
             <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <About />
            )
        }
    }
}

export default AboutContainer;
