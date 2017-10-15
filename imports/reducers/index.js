import { combineReducers } from 'redux';
import documents from './documents';

const readableApp = combineReducers({
  documents,
})

export default readableApp;
