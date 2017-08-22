import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import { conductReducer } from './modules/conduct';
import { sessionReducer } from './modules/sessions';

export default combineReducers({
    navigation: NavigationReducer,
    conduct: conductReducer,
    session: sessionReducer,
});
