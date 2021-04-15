import React, { Suspense } from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import routes from 'commons/config/routes';

const Loading = () => <div>loading....</div>;

const BaseLayout = () => (
  <div>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.name} />
        ))}
      </Switch>
    </Suspense>
  </div>
);

const AppLayout = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" render={() => <BaseLayout />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppLayout;
