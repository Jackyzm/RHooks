import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import store from '@/reducers';
import { Provider } from './RHooks';
import './App.css';

const Example = lazy(() => import('./routes/Example'));
const Home = lazy(() => import('./routes/Home'));
const Test = lazy(() => import('./routes/Test'));

const App = () => {
	// const store = createStore(reducers);
	return (
		<HashRouter>
			<Provider store={store}>
				<Switch>
					<Suspense fallback={<div>Loading...</div>}>
						<Route path="/" exact component={() => <Example />} />
						<Route path="/home" exact component={() => <Home />} />
						<Route path="/test" exact component={() => <Test />} />
					</Suspense>
				</Switch>
			</Provider>
		</HashRouter>
	);
};

export default App;
