import Player from '@vimeo/player';

import throttle from 'lodash.throttle';
const CURRENT_TIME_KEY = 'videoplayer-current-time';
const currentTimeStorage =
  JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || '';
