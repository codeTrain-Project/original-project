import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddMoneyScreen from '../screens/AddMoneyScreen';
import ModalScreen from '../screens/ModalScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Add Money" component={AddMoneyScreen} />
			<Tab.Screen name="Modal" component={ModalScreen} />
		</Tab.Navigator>
	);
};

export default HomeTabs;

{
	/* <Stack.Navigator
	screenOptions={{
		header: () => null,
	}}
>
	<Stack.Screen name="Home" component={HomeScreen} />
	<Stack.Screen name="Add Money" component={AddMoneyScreen} />
	<Stack.Screen
		options={{
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
</Stack.Navigator>; */
}
