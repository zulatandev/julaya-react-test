import { combineReducers } from 'redux';
import agentReducer from './agent.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
  agentReducer,
  authReducer,
});
