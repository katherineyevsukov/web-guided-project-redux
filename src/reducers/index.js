import { combineReducers } from 'redux';

import { dragonReducer } from './dragonReducer';
import { titleReducer } from './titleReducer';

export const rootReducer = combineReducers({
  dragonReducer,
  titleReducer
});