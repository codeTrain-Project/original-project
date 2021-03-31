import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PayPage from '../screens/PayPage';
import RequestPage from '../screens/RequestPage';

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
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Pay"
				component={PayPage}
			/>
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Request"
				component={RequestPage}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;
