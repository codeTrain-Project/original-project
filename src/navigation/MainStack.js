import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Main"
				component={MainScreen}
			/>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;
