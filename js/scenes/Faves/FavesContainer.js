import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Faves from './Faves';
import { fetchFaves } from '../../redux/modules/faves';

class FavesContainer extends Component {

    static route = {
        navigationBar: {
          title: 'Faves',
        }
    };

    componentDidMount() {
        this.props.dispatch(fetchFaves())
    }

    render() {
        if (this.props.isLoading) {
            return (
             <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <Faves favesData={this.props.data}/>;
        }
    }
}

FavesContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        isLoading: state.faves.isLoading,
        data: state.faves.favesData,
    }
}

export default connect(mapStateToProps)(FavesContainer);
