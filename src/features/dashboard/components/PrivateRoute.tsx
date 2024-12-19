import PrivateLayout from '@/layouts/PrivateLayout';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute: React.FC = () => {
  const token = Cookies.get('token');
  return token ? <PrivateLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
