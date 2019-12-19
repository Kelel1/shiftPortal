import { STORE_CURRENT_MONTH, STORE_CURRENT_YEAR, STORE_LAST_DATE } from '../actions/types';

const initialState = {
    currentMonth: null,
    currentYear: null,
    lastDate: null
};

// Actions are dispatched to this reducer...
const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_CURRENT_MONTH:
        return {
          ...state,
          currentMonth: action.payload
        };
      case STORE_CURRENT_YEAR:
        return {
          ...state,
          currentYear: action.payload
        };
      case STORE_LAST_DATE: {
        return {
          ...state,
          lastDate: action.payload
        }
      }
      default:
        return state;
    }
};

export default calendarReducer;