import { STORE_CURRENT_MONTH } from './types';

export const storeCurrentMonth = month => ({
    type: STORE_CURRENT_MONTH,
    payload: month
});