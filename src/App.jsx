import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import './App.css';

const Example = lazy(() => import('./routes/Example'));
const Home = lazy(() => import('./routes/Home'));
const Test = lazy(() => import('./routes/Test'));
const Effect = lazy(() => import('./routes/Effect'));

const reduxDevTools =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reduxDevTools
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={() => <Example />} />
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/test" exact component={() => <Test />} />
            <Route path="/effect" exact component={() => <Effect />} />
          </Suspense>
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
