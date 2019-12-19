import { 
    STORE_CURRENT_MONTH,
    STORE_CURRENT_YEAR,
    STORE_LAST_DATE
} from './types';

export const storeCurrentMonth = month => ({
    type: STORE_CURRENT_MONTH,
    payload: month
});

export const storeCurrentYear = year => ({
    type: STORE_CURRENT_YEAR,
    payload: year
});

export const storeLastDate = date => ({
    type: STORE_LAST_DATE,
    payload: date
});