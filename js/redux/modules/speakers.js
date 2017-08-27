import { formatDataObject } from '../../lib/helperFunctions';

const LOAD_SPEAKERS = 'LOAD_SPEAKERS';

function loadSpeakers(speakerData) {
    return {
        type: LOAD_SPEAKERS,
        payload: speakerData,
    }
}

export function fetchSpeakers(speakerId) {
    return function(dispatch) {
        let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
       // TODO: FIND FROM BOOMTOWN HOW TO PASS SINGLE SPEAKER THROUGH TO LINK 
        fetch(endpoint)
        .then(response => response.json())
        .then(data => formatDataObject(data))
        .then(data => {
            dispatch(loadSpeakers(data))
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));        
    }
}

const initialState = {
    speakerData: {},
    isLoading: true
}

export function speakerReducer(state=initialState, action) {
    switch(action.type) {
        case LOAD_SPEAKERS:
            return {
                ...state,
                isLoading: false,
                speakerData: action.payload
            }
        default:
            return state
    }
}