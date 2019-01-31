import React from 'react';

export const AppContext = React.createContext(null);

const Provider = ({ store, children }) => {
	return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default Provider;
