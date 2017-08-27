import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import { Router } from '../navagation/routes';

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID, 
    Router.getRoute('session', { sessionData })
  ));
}

export const goToSpeaker = (speakerData) => {
  Store.dispatch(NavigationActions.push(
    'root', 
    Router.getRoute('speaker', { speakerData })
  ));
}