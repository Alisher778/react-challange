import Axios from 'axios';
import * as actionTypes from './actionTypes';
import API_KEY from '../../configs/keys';

const companiesUrl = `https://api-v2.intrinio.com/companies/search?api_key=${API_KEY}&query=`;

export const fetchPending = () => ({
  type: actionTypes.SEARCH_COMPANY_PENDING,
});

export const fetchError = (error) => ({
  type: actionTypes.SEARCH_COMPANY_ERROR,
  payload: error,
});

export const fetchSuccess = (data) => ({
  type: actionTypes.SEARCH_COMPANY,
  payload: data,
});

export const searchCompany = (query) => (dispach) => {
  dispach(fetchPending());
  return Axios
    .get(companiesUrl + query)
    .then((res) => {
      const { data: { companies } } = res;
      if (companies.length === 0) {
        return dispach(fetchSuccess([{ name: 'No company found', id: 'notFound' }]));
      }
      return dispach(fetchSuccess(companies));
    })
    .catch((err) => dispach(fetchError(err.message)));
};
