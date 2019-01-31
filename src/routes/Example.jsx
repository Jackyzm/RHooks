import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from '@/Rhooks';

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
					// setCount(count + 1);
				}}
			>
				Click me
			</button>
			<p>
				{user} | {pwd}
			</p>
			<button
				onClick={() => {
					// dispatch({ type: 'increment' });
					setForm({ ...form, user: 'user' });
				}}
			>
				Click me
			</button>
			<Link to="/home">to Home</Link>
		</div>
	);
};

export default connect(store => {
	return {
		count: store.example.state.count,
		dispatch: store.example.dispatch,
	};
})(withRouter(Example));
