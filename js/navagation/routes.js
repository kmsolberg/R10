import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/';
import Schedule from '../scenes/Schedule/';
import Session from '../scenes/Session/';
import Faves from '../scenes/Faves/';
import NavigationLayout from './NavigationLayout';
import Speaker from '../scenes/Speaker/';

export const Router = createRouter(() => ({
    about: () => About,
    navigationBar: () => NavigationLayout,
    schedule: () => Schedule,
    session: () => Session,
    faves: () => Faves,
    speaker: () => Speaker,
}));