import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AuthNav from './src/navigation/AuthNav';
import MainNavigator from './src/navigation/index';

const MainApp = () => {
	const [loggedIn, setLogged] = useState(false);

	if (loggedIn) {
		return (
			<>
				<MainNavigator />
				<StatusBar style="auto" />
			</>
		);
	} else {
		return (
			<>
				<AuthNav />
				<StatusBar style="auto" />
			</>
		);
	}
};

export default MainApp;
