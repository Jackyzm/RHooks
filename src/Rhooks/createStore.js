import { useReducer } from 'react';

const createStore = props => {
	const store = {};
	// eslint-disable-next-line
	Object.entries(props).map(item => {
		const [state, dispatch] = useReducer(item[1].reducer, item[1].initialState);
		store[item[0]] = {
			state,
			dispatch,
		};
	});
	return store;
};

export default createStore;
