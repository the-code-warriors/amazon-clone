import { combineReducers } from 'redux';
import GetDevelopers from './get_developers_reducer';

const rootReducer = combineReducers({
  developers: GetDevelopers
});

export default rootReducer;
