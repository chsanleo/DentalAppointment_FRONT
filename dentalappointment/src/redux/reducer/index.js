import { combineReducers } from 'redux';

import usersReducer from './user.js';
import appointmentReducer from './appointment.js';

const reducer = combineReducers({
    users: usersReducer,
    appointments : appointmentReducer
});
export default reducer;