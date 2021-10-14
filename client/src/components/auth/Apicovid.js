import axios from 'axios';

const apicovid = axios.create({
  baseURL: 'https://covid-api-wrapper.herokuapp.com/cases'

  //' http://localhost:5000/api/auth/covid',

  //'https://covid-api.mmediagroup.fr/v1/history?country='
  // baseURL: 'https://covid-api.mmediagroup.fr/v1/cases?country='
  //baseURL: 'https://covid-api-wrapper.herokuapp.com/cases'
});

export default apicovid;
