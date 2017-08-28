import { getFaves } from '../../config/models';
import { formatSessionData } from '../../lib/helperFunctions';

const LOAD_FAVES = 'LOAD_FAVES';
const LOAD_IDS = 'LOAD_IDS';

function loadFaves(favesData) {
    return {
        type: LOAD_FAVES,
        payload: favesData,
    }
}

function loadIDs(favesID) {
    return {
        type: LOAD_IDS,
        payload: favesID,
    }
}

export function fetchFaves() {
    return function(dispatch) {
        let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
        let favesID = getFaves()
        fetch(endpoint)
        .then(response => response.json())
        .then(data => data.filter(item => {
            return favesID.find(el=> item.session_id === el.id)
        }))
        .then(data => formatSessionData(data))
        .then(data => {
            dispatch(loadFaves(data));
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

export function fetchFaveIds() {
    return function(dispatch) {
        let favesID = getFaves()
        dispatch(loadIDs(favesID))
    }
}

const initialState = {
    favesData: [],
    favesID: [],
    isLoading: true
}

export function favesReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_FAVES:
            return {
                ...state,
                isLoading: false,
                favesData: action.payload
            }
        case LOAD_IDS:
            return {
                ...state,
                favesID: action.payload
            }
        default:
            return state
    }
}