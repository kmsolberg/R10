import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/';
import Schedule from '../scenes/Schedule/';
import Session from '../scenes/Session/';
import Speaker from '../scenes/Speaker/';
import Faves from '../scenes/Faves/';

export const Router = createRouter(() => ({
    about: () => About,
    schedule: () => Schedule,
    session: () => Session,
    faves: () => Faves,
    speaker: () => Speaker,
  }));