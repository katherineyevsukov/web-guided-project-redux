import { combineReducers } from 'redux';

import dragonReducer from './dragonReducer';
import titleReducer from './titleReducer';

const rootReducer = combineReducers({
  dragonState:dragonReducer,
  titleState:titleReducer
});

export default rootReducer;