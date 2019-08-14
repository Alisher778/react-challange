import Axios from 'axios';
import * as actionTypes from './actionTypes';
import API_KEY from '../../configs/keys';

const companiesUrl = `https://api.intrinio.com/companies?api_key=${API_KEY}`;

export const fetchPending = () => ({
  type: actionTypes.FETCH_PENDING,
});

export const fetchError = (error) => ({
  type: actionTypes.FETCH_ERROR,
  payload: error,
});

export const fetchSuccess = (data) => ({
  type: actionTypes.FETCH_COMPANIES,
  payload: data,
});

export const fetchCompanies = () => (dispach) => {
  dispach(fetchPending());
  return Axios
    .get(companiesUrl)
    .then((res) => {
      const { data } = res.data;
      return dispach(fetchSuccess(data));
    })
    .catch((err) => dispach(fetchError(err.message)));
};
