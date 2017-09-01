import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Faves from './Faves';
import { fetchFaves, fetchFaveIds } from '../../redux/modules/faves';
import CustomActivityIndicator from '../../components/CustomActivityIndicator/';

import realm from '../../config/models';
class FavesContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Faves',
        }
    };

    componentDidMount() {
        this.props.dispatch(fetchFaves())
        this.props.dispatch(fetchFaveIds())
        realm.addListener('change', () => this.props.dispatch(fetchFaves()));
    }

    render() {
        if (this.props.isLoading) {
            return (
                <CustomActivityIndicator />
            );
        } else {
            return <Faves 
                favesData={this.props.data} 
                favesID={this.props.favesID}
            />;
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
        favesID: state.faves.favesID,
    }
}

export default connect(mapStateToProps)(FavesContainer);
