import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/';
import Schedule from '../scenes/Schedule/';
import Session from '../scenes/Session/';
import Speaker from '../scenes/Speaker/';
import Faves from '../scenes/Faves/';
import NavigationLayout from './NavigationLayout';

export const Router = createRouter(() => ({
    about: () => About,
    navigationBar: () => NavigationLayout,
    schedule: () => Schedule,
    session: () => Session,
    faves: () => Faves,
    speaker: () => Speaker,
}));