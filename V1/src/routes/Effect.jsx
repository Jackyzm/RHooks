import React, { useState, useEffect } from 'react';

const Effect = props => {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(1);

	useEffect(() => {
		document.title = `You clicked ${count} times11`;
	}, [props]);

	return (
		<div>
			<p>Effect</p>
			<p>{count}</p>
			<p>You clicked {count} times22222</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click me
			</button>
		</div>
	);
};

export default Effect;
