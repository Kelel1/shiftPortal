import { 
    STORE_CURRENT_MONTH,
    STORE_CURRENT_YEAR
} from './types';

export const storeCurrentMonth = month => ({
    type: STORE_CURRENT_MONTH,
    payload: month
});

export const storeCurrentYear = year => ({
    type: STORE_CURRENT_YEAR,
    payload: year
});