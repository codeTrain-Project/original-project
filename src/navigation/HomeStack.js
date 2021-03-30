import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddMoneyScreen from '../screens/AddMoneyScreen';
import ModalScreen from '../screens/ModalScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Add Money"
				component={AddMoneyScreen}
			/>
			<Stack.Screen
				options={{
					header: () => null,
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
				name="Modal"
				component={ModalScreen}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
