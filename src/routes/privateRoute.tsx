import { FC } from 'react';
import {  RouteProps } from 'react-router';
import appConfig from '@/config';
import { cache } from '@/utils/data';
import { loginOutProcessing } from '@/utils/auth';
import { useGetCurrentUserForm } from '@/api';

const PrivateRoute: FC<RouteProps> = ({children}) => {
  const tokenKey = appConfig.request?.tokenHeader || 'token';
  const token: string = cache.get(tokenKey) || '';
  const loginForm = useGetCurrentUserForm()

  return token || loginForm?.data ? children : (loginOutProcessing(),"")

};

export default PrivateRoute;
