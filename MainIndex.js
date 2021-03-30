import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AuthNav from './src/navigation/AuthNav';
import MainNavigator from './src/navigation/index';
import { useSelector } from 'react-redux';

const MainApp = () => {
	const [loggedIn, setLogged] = useState(false);

	const auth = useSelector((state) => state.firebase.auth);

	console.log(auth);
	if (auth.uid) {
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
