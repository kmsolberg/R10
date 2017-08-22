import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/';
import Schedule from '../scenes/Schedule/';

export const Router = createRouter(() => ({
    home: () => Schedule,
  }));