import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const PublicRoute = ({
  component: C, props: cProps, ...rest
}) => {
  const account = useSelector(({ authReducer }) => authReducer.account);

  return (
    <Route
      {...rest}
      render={(props) => (!account ? (
        <C {...props} {...cProps} match={rest.computedMatch} />
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  props: PropTypes.object,
};

PublicRoute.defaultProps = {
  props: {},
};

export default PublicRoute;
