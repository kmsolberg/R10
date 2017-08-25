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