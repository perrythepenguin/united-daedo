import CommandsReducer from './CommandsReducer';
import WorldsReducer from './WorldsReducer';
import ReferencesReducer from './ReferencesReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  commands: CommandsReducer,
  worlds: WorldsReducer,
  references: ReferencesReducer
})
