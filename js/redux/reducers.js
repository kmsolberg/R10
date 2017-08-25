import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import { conductReducer } from './modules/conduct';
import { sessionReducer } from './modules/sessions';
import { favesReducer } from './modules/faves';

export default combineReducers({
    navigation: NavigationReducer,
    conduct: conductReducer,
    session: sessionReducer,
    faves: favesReducer
});
