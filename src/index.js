import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from "./components/App";
import Loader from './components/shared/Loader';


render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);
