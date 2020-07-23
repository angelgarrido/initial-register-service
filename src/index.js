/* Basic React imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

/* Pages imports */
import './index.css';
import PageHome from './pages/page-home';
import PageAdmin from './pages/page-admin';
import PageLogin from './pages/page-login';
import PageLogout from './pages/page-logout';
import PageRestaurants from './pages/page-restaurants';

/* Amplify imports */
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact= {true} path="/" component={ PageHome } />
      <Route path="/restaurantes" component={ PageRestaurants } />
      <Route path="/admin" component={ PageAdmin } />
      <Route path="/login" component = { PageLogin } />
      <Route path="/logout" component = { PageLogout } />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
