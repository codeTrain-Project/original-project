import React, { useState } from 'react';
import AuthNav from './src/navigation/AuthNav';
import MainNavigator from './src/navigation/index';

const MainApp = () => {
	const [loggedIn, setLogged] = useState(true);

	if (loggedIn) {
		return (
			<>
				<MainNavigator />
			</>
		);
	} else {
		return (
			<>
				<AuthNav />
			</>
		);
	}
};

export default MainApp;
