import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <React.Suspense fallback={<span>Loading ...</span>}>
      <Outlet />
    </React.Suspense>
  );
};

export default Layout;
