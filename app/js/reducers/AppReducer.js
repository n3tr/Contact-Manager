
import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import contactByIdReducer from './contactByIdReducer'
// Redux
const AppReducer = combineReducers({
  contacts: contactsReducer,
  contactById: contactByIdReducer
});

export default AppReducer
