import React, { FC } from 'react';
import { RouteProps } from 'react-router';
import PrivateRoute from './privateRoute';
import { useIntl } from 'react-intl';
import LayoutPage from '@/layout';

export interface WrapperRouteProps extends RouteProps {
  /** authorization？ */
  children?:any,
  auth?: boolean;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ auth, children }:any) => {
  const { formatMessage } = useIntl();
  if(auth){
    return <LayoutPage />
  }else{
    return <>{children}</>;

  }
};

export default WrapperRouteComponent;
