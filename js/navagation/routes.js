import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/';
import Schedule from '../scenes/Schedule/';
import Session from '../scenes/Session/';

export const Router = createRouter(() => ({
    home: () => About,
  }));