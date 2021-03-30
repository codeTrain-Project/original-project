import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterScreen2 from '../screens/RegisterScreen2';
import RegisterScreen3 from '../screens/RegisterScreen3';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthNav = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: () => null,
				}}
			>
				<Stack.Screen name="  Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Register2" component={RegisterScreen2} />
				<Stack.Screen name="Register3" component={RegisterScreen3} />
				<Stack.Screen name="Log in" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AuthNav;
