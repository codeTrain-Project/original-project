import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Try from '../screens/Try';

const Stack = createStackNavigator();

const ModalStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: 'transparent' },
				cardOverlayEnabled: true,
				cardStyleInterpolator: ({ current: { progress } }) => ({
					cardStyle: {
						opacity: progress.interpolate({
							inputRange: [0, 0.5, 0.9, 1],
							outputRange: [0, 0.25, 0.7, 1],
						}),
					},
					overlayStyle: {
						opacity: progress.interpolate({
							inputRange: [0, 1],
							outputRange: [0, 0.5],
							extrapolate: 'clamp',
						}),
					},
				}),
			}}
			mode="modal"
		>
			{/* <Stack.Screen name="Home" component={HomeStack} /> */}
			<Stack.Screen name="Modal" component={Try} />
		</Stack.Navigator>
	);
};

export default ModalStack;
