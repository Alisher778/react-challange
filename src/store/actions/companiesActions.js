import { FETCH_COMPANIES } from './actionTypes';

export const fetchCompanies = (data) => {
    return {
        type: FETCH_COMPANIES,
        data
    }
}