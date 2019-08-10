import {
    FETCH_COMPANIES,
    FETCH_COMPANIES_ERROR,
    FETCH_COMPANIES_PENDING,
} from './actionTypes';
import Axios from 'axios';
import { API_KEY } from '../../keys';

const companiesUrl = `https://api.intrinio.com/companies?api_key=${API_KEY}`;


export const fetchPending = () => {
    return {
        type: FETCH_COMPANIES_PENDING
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_COMPANIES_ERROR,
        error
    }
}

export const fetchSuccess = (data) => {
    return {
        type: FETCH_COMPANIES,
        data
    }
}

export const fetchCompanies = () => {
    return dispach => {
        dispach(fetchPending());
        return Axios
            .get(companiesUrl)
            .then(res => {
                const data = res.data.data;
                console.log(data);

                return dispach(fetchSuccess(data))
            })
            .catch(err => {
                return dispach(fetchError(err.message))
            })
    }
}