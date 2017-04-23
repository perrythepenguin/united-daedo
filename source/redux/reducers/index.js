import UserReducer from './UserReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  users: UserReducer
})
