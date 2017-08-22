import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import { conductReducer } from './modules/conduct';

export default combineReducers({
    navigation: NavigationReducer,
    conduct: conductReducer,
});
