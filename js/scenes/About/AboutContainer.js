import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchConduct } from '../../redux/modules/conduct';

import About from './About';

class AboutContainer extends Component {

    static route = {
      navigationBar: {
        title: 'About',
      }
    };

      componentDidMount() {
        this.props.dispatch(fetchConduct())
      }

    render() {
        if (this.props.isLoading) {
            return (
             <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <About data={this.props.data} />
            )
        }
    }
}

AboutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string
  })).isRequired
}

function mapStateToProps(state) {
  return {
    isLoading: state.conduct.isLoading,
    data: state.conduct.conductData,
  }
}

export default connect(mapStateToProps)(AboutContainer);
