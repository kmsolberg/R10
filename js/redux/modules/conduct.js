const LOAD_CONDUCT = 'LOAD_CONDUCT';

export function loadConduct(conductData) {
    return {
        type: LOAD_CONDUCT,
        payload: conductData
    }
}

export function fetchConduct() {
    return function(dispatch) {
        let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
        fetch(endpoint)
          .then(response => response.json())
          .then(data => {
            dispatch(loadConduct(data));
          })
          .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

const initialState = {
    conductData: [],
    isLoading: true
}

export function conductReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_CONDUCT:
            return {
                isLoading: false,
                conductData: action.payload
            }
        default:
            return state;
    }
}