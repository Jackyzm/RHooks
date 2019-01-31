import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

const Provider = ({ store, children }) => {
	const cloneStore = cloneDeep(store);
	for (let key in cloneStore) {
		cloneStore[key].state = cloneStore[key].initialState;
	}
	window.RHooks = cloneStore;
	return <React.Fragment>{children}</React.Fragment>;
};

export default Provider;
