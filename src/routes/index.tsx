import React, { lazy, FC } from "react";
import { useRoutes } from "react-router-dom";


// const NotFound = lazy(() => import('@/pages/404'));
// const Setting = lazy(() => import('@/pages/setting'))
// const Customer = lazy(() => import('@/pages/customer'))
// const Knowledge = lazy(() => import('@/pages/knowledge'))
import Home from "../pages/home";
import About from "../pages/about";

export const routesConfig: any[] = [

  {
    name: 'home',
    path: "/",
    requireauth: true,
    element: <Home />,
    children: [

    ]

  },
  {
    name: 'about',
    path: "/about",
    requireauth: true,
    element: <About />,
    children: [

    ]

  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routesConfig);
  return element;
};

export default RenderRouter;
