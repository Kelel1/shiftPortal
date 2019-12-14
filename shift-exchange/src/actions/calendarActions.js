import { STORE_CURRENT_MONTH } from './types';

export const storCurrentMonth = month => ({
    type: STORE_CURRENT_MONTH,
    payload: month
});