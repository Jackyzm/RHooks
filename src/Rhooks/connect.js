import React from 'react';
import { AppContext } from './Provider';

const connect = getStore => {
	const WrappedComponent = Container => {
		const Component = () => {
			return <AppContext.Consumer>{props => <Container {...getStore(props)} />}</AppContext.Consumer>;
		};
		return Component;
	};
	return WrappedComponent;
};

export default connect;
