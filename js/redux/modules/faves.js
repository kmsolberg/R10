import { getFaves } from '../../config/models';
import { formatSessionData } from '../../lib/helperFunctions';

const LOAD_FAVES = 'LOAD_FAVES';

function loadFaves(favesData) {
    return {
        type: LOAD_FAVES,
        payload: favesData,
    }
}

export function fetchFaves() {
    return function(dispatch) {
        let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
        let favesID = getFaves().map((fave) => fave.id)
        fetch(endpoint)
        .then(response => response.json())
        data => data.filter(item => {
            return item.session_id = favesID
        })
        .then(data => formatSessionData(data))
        .then(data => {
            dispatch(loadFaves(data));
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

const initialState = {
    favesData: [],
    isLoading: true
}

export function favesReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_FAVES:
            return {
                isLoading: false,
                favesData: action.payload
            }
        default:
            return state
    }
}