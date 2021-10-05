import { combineReducers } from 'redux';

import { dragonReducer } from './dragonReducer';
import { titleReducer } from './titleReducer';

console.log(dragonReducer);
console.log(titleReducer);

const rootReducer = combineReducers({
  dragonReducer,
  titleReducer
});

export default rootReducer;