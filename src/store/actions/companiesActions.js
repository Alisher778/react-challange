import Axios from 'axios';
import * as actionTypes from './actionTypes';
import API_KEY from '../../configs/keys';

const companiesUrl = `https://api.intrinio.com/companies?api_key=${API_KEY}`;

export const fetchPending = () => ({
  type: actionTypes.FETCH_PENDING,
});

export const fetchError = (error) => ({
  type: actionTypes.FETCH_ERROR,
  error,
});

export const fetchSuccess = (data) => ({
  type: actionTypes.FETCH_COMPANIES,
  data,
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

// ****************** SELECTED COMPANY *************************


export const selectedCompany = (data) => ({
  type: actionTypes.SELECTED_COMPANY,
  data,
});


export const fetchSelectedCompanyDetails = (ticker) => (dispach) => {
  dispach(fetchPending());

  const companyDetailsURL = `https://api-v2.intrinio.com/companies/${ticker}?api_key=${API_KEY}`;
  return Axios
    .get(companyDetailsURL)
    .then((res) => {
      const { data } = res;
      return dispach(selectedCompany(data));
    })
    .catch((err) => dispach(fetchError(err.message)));
};
