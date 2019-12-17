// Root Reducer
import { combineReducers } from 'redux';

import calendarReducer from './calendarReducer';

export default combineReducers({
    calendar: calendarReducer // access state in container components using `this.props.auth`
});