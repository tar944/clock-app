import { combineReducers } from '@reduxjs/toolkit';

import {clockReducer} from './slice/clock';

const rootReducer = combineReducers({
  clock: clockReducer
});

export default rootReducer;
