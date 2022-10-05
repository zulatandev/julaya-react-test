import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAccount } from '../redux/actions/auth.action';
import PublicRoute from './PublicRoute';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccount());
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/home" />)} />

      <PublicRoute
        path="/auth/signin"
        component={SignIn}
      />

      <PrivateRoute
        path="/home"
        component={Home}
      >

      </PrivateRoute>
    </Switch>
  )
};

export default Routes;
