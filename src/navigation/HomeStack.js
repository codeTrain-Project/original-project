import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddMoneyScreen from '../screens/AddMoneyScreen';
import ModalScreen from '../screens/ModalScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Try from '../screens/Try';
import LinkMomo from '../screens/LinkMomo';
import OTPScreen from '../screens/OTPScreen';
import SuccessfulScreen from '../screens/SuccessfulScreen';

const Stack = createStackNavigator();
const config = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};
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
					transitionSpec: {
						open: config,
						close: config,
					},
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

			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Try"
				component={Try}
			/>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="LinkMomo"
				component={LinkMomo}
			/>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="OTPScreen"
				component={OTPScreen}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
