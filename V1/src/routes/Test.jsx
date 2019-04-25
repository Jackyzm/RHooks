import React, { useState, useReducer } from 'react';
import Example from './Example';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'reset':
			return initialState;
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			// A reducer must always return a valid state.
			// Alternatively you can throw an error if an invalid action is dispatched.
			return state;
	}
}

function Counter(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [form, setForm] = useState({ user: 'admin', pwd: '111111' });
	const { user, pwd } = form;
	return (
		<div>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<div>
				<p>
					{user} | {pwd}
				</p>
				<button
					onClick={() => {
						dispatch({ type: 'increment' });
						setForm({ ...form, user: 'user' });
					}}
				>
					Click me
				</button>
			</div>
			<div>
				<Example />
			</div>
		</div>
	);
}

export default Counter;
