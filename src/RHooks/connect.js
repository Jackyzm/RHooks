import React, { useReducer } from 'react';
import cloneDeep from 'lodash/cloneDeep';

const connect = (initArr, getStore) => {
	const WrappedComponent = Container => {
		const Component = () => {
			const store = cloneDeep(window.RHooks);
			// eslint-disable-next-line
			initArr.map(item => {
				const [state, dispatch] = useReducer(store[item].reducer, store[item].state);
				store[item].dispatch = dispatch;
				store[item].state = state;
			});
			window.RHooks = store;
			return <Container {...getStore(window.RHooks)} />;
		};
		return Component;
	};
	return WrappedComponent;
};

export default connect;
