/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Route } from 'react-router-dom';
import Companies from '../components/Companies/Companies';
import ShowCompany from '../components/Companies/ShowCompany/ShowCompany';
import LandingPage from '../components/LandingPage/LandingPage';
import Search from '../components/Search/Search';

export default [
  <Route key="landingPage" path="/" exact component={LandingPage} />,
  <Route key="companiesPage" path="/companies" exact component={Companies} />,
  <Route key="showCompanyPage" path="/companies/:ticker" exact component={ShowCompany} />,
  <Route key="searchPage" path="/search" exact component={Search} />,
];
