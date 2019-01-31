import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from '@/RHooks';

const Example = props => {
	console.log(props);
	// Declare a new state variable, which we'll call "count"
	// const [count, setCount] = useState(1);
	const [form, setForm] = useState({ user: 'admin', pwd: '111111' });
	const { user, pwd } = form;
	const { count, dispatch } = props;
	return (
		<div>
			<p>Example</p>
			<p>{count}</p>
			<p>You clicked {count} times</p>
			<button
				onClick={() => {
					dispatch({ type: 'increment' });
				}}
			>
				Click me
			</button>
			<p>
				{user} | {pwd}
			</p>
			<button
				onClick={() => {
					setForm({ ...form, user: 'user' });
				}}
			>
				Click me
			</button>
			<Link to="/home">to Home</Link>
		</div>
	);
};

export default connect(
	['example'],
	store => {
		return {
			count: store.example.state.count,
			dispatch: store.example.dispatch,
		};
	}
)(Example);
