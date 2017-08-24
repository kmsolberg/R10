import { formatDataObject, formatSessionData } from '../../lib/helperFunctions';

const LOAD_SESSIONS = 'LOAD_SESSIONS';

export function loadSessions(sessionData) {
    return {
        type: LOAD_SESSIONS,
        payload: sessionData
    }
}

export function fetchSessions() {
    return function(dispatch) {
        let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
        fetch(endpoint)
        .then(response => response.json())
        // .then(data => formatDataObject(data))
        .then(data => formatSessionData(data))
        .then(data => {
            dispatch(loadSessions(data));
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

const initialState = {
    sessionData: [],
    isLoading: true
}

export function sessionReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_SESSIONS:
            return {
                isLoading: false,
                sessionData: action.payload,
            }
        default:
            return state;
    }
}