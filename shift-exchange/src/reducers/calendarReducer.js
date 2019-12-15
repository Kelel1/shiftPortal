import { STORE_CURRENT_MONTH } from '../actions/types';

const initialState = {
    currentMonth: 0
};

// Actions are dispatched to this reducer...
const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_CURRENT_MONTH:
        return {
          currentMonth: action.payload
        };
      default:
        return state;
    }
};

export default calendarReducer;