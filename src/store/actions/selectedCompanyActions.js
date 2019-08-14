import Axios from 'axios';
import * as actionTypes from './actionTypes';
import API_KEY from '../../configs/keys';

export const fetchSelectedCompanyPending = () => ({
  type: actionTypes.SELECTED_COMPANY_PENDING,
});

export const fetchSelectedCompanyError = (error) => ({
  type: actionTypes.SEARCH_COMPANY_ERROR,
  payload: error,
});


export const selectedCompany = (data) => ({
  type: actionTypes.SELECTED_COMPANY,
  payload: { ...data },
});


export const fetchSelectedCompanyDetails = (ticker) => (dispach) => {
  dispach(fetchSelectedCompanyPending());

  const companyDetailsURL = `https://api-v2.intrinio.com/companies/${ticker}?api_key=${API_KEY}`;
  return Axios
    .get(companyDetailsURL)
    .then((res) => {
      const { data } = res;
      return dispach(selectedCompany(data));
    })
    .catch((err) => dispach(fetchSelectedCompanyError(err.message)));
};
