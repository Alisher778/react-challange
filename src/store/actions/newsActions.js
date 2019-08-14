import Axios from 'axios';
import * as actionTypes from './actionTypes';
import API_KEY from '../../configs/keys';

const companiesUrl = `https://api-v2.intrinio.com/companies/news?api_key=${API_KEY}`;

export const fetchPending = () => ({
  type: actionTypes.FETCH_PENDING,
});

export const fetchError = (error) => ({
  type: actionTypes.FETCH_ERROR,
  error,
});

export const fetchSuccess = (data) => ({
  type: actionTypes.FETCH_NEWS,
  data,
});

export const fetchNews = (id) => (dispach) => {
  dispach(fetchPending());
  return Axios
    .get(companiesUrl)
    .then((res) => {
      const data = res.data.news.filter((item) => item.company.ticker === id);
      return dispach(fetchSuccess(data));
    })
    .catch((err) => dispach(fetchError(err.message)));
};
