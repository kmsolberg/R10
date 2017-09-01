import { formatDataObject } from '../../lib/helperFunctions';

const LOAD_SPEAKERS = 'LOAD_SPEAKERS';

function loadSpeakers(speakerData) {
    return {
        type: LOAD_SPEAKERS,
        payload: speakerData,
    }
}

export function fetchSpeakers(speakerId) {
    return function (dispatch) {
        let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
        fetch(endpoint)
            .then(response => response.json())
            .then(data => formatDataObject(data))
            .then(data => {
                dispatch(loadSpeakers(data))
            })
            .catch(error => console.log(`Error fetching data: ${error}`));
    }
}

const initialState = {
    speakerData: {},
    isLoading: true
}

export function speakerReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SPEAKERS:
            if (!action.payload) {
                return {
                    isLoading: false,
                    speakerData: {}
                }
            } else {
                return {
                    isLoading: false,
                    speakerData: action.payload
                }
            }
        default:
            return state
    }
}