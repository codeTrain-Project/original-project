import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) {
		return (
			<>
				<View style={{ marginTop: 100 }}>
					<Text>Loading......</Text>
				</View>
			</>
		);
	}

	return children;
}

export default AuthIsLoaded;
