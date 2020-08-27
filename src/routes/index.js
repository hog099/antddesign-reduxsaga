import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RoutesPrivates from './routesprivate';

import AuthLayout from '../pages/_layouts/auth/index';
import DefaultLayout from '../pages/_layouts/default/index';

import Login from '../pages/app/Auth/Login';
import Dashboard from '../pages/app/Dashboard/Home/Index';

export default function Routes() {
  return (
    <Switch>
      {/* <RoutesPrivates path="/nopermission" exact component={NoPermission} />  */}
      {/* <Route path="/" exact component={props => <AuthLayout><Login {...props} /></AuthLayout>} /> */}
      <Route path="/" exact component={props => <AuthLayout><Login {...props} /></AuthLayout>} />
      <Route path="/dashboard" exact component={props => <DefaultLayout><Dashboard {...props} /></DefaultLayout>} />
      {/* <RoutesPrivates path="/"  component={props => <DefaultLayout><Dashboard {...props} /></DefaultLayout>} /> */}

      <Redirect from='*' to='/' />
    </Switch>
  );
}
