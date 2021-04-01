import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PayPage from '../screens/PayPage';
import RequestPage from '../screens/RequestPage';
import SuccessfulScreen from '../screens/SuccessfulScreen';

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
			<Stack.Screen
				options={{
					header: () => null,
				}}
				name="Successful"
				component={SuccessfulScreen}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;
