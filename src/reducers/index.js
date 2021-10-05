import { combineReducers } from 'redux';

import { dragonReducer } from './dragonListReducer';
import { titleReducer } from './titleReducer';

export const rootReducer = combineReducers({
  dragonReducer,
  titleReducer
});