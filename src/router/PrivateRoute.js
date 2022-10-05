import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({
  component: C, props: cProps, path, ...rest
}) => {
  const account = useSelector(({ authReducer }) => authReducer.account);

  return (
    <Route
      {...rest}
      render={(props) => ((!!account) ? (
        <C {...props} {...cProps} match={rest.computedMatch} />
      ) : <Redirect to="/auth/signin" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  path: PropTypes.string,
  props: PropTypes.object,
};

PrivateRoute.defaultProps = {
  path: '',
  props: {},
};

export default PrivateRoute;
