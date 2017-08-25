import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Session from './Session';
import { fetchSingleSession } from '../../redux/modules/sessions';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Session',
        }
    };

    // componentDidMount() {
    //     this.props.dispatch(fetchSingleSession(this.session_id))
    // }

    render() {
        return <Session sessionData={this.props.sessionData}/>;
    }
}

SessionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    sessionData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.number,
        object: PropTypes.shape({
            description: PropTypes.string,
            location: PropTypes.string,
            session_id: PropTypes.string,
            speaker: PropTypes.string,
            start_time: PropTypes.number,
            title: PropTypes.string,
        }),
    })).isRequired
}

// function mapStateToProps(state) {
//     return {
//         isLoading: state.session.isLoading,
//         sessionData: state.session.sessionData,
//     }
// }
export default (SessionContainer);
