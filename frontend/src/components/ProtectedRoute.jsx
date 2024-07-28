import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
    
  return (
    <Route
      {...rest}
      render={(props) =>
        user && (user.role=="trainer" || user.role=="admin") ? (
          <Component {...props} />
        ) : (
            <Navigate to="/login" state={{ from: location }} replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
