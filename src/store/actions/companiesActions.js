import Axios from 'axios';
import {
  FETCH_COMPANIES,
  FETCH_COMPANIES_ERROR,
  FETCH_COMPANIES_PENDING,
  SELECTED_COMPANY,
} from './actionTypes';
import API_KEY from '../../configs/keys';

const companiesUrl = `https://api.intrinio.com/companies?api_key=${API_KEY}`;

export const fetchPending = () => ({
  type: FETCH_COMPANIES_PENDING,
});

export const fetchError = (error) => ({
  type: FETCH_COMPANIES_ERROR,
  error,
});

export const fetchSuccess = (data) => ({
  type: FETCH_COMPANIES,
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
  type: SELECTED_COMPANY,
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
