import { STORE_CURRENT_MONTH } from '../actions/types';

const initialState = {
    currentMonth: 0
};

// Actions are dispatched to this reducer...
export default function (state = initialState, action) {
    switch (action.type) {
      case STORE_CURRENT_MONTH:
        return {
          ...state,
          currentMonth: action.payload.currentMonth,
          
        };
      default:
        return state;
    }
};

