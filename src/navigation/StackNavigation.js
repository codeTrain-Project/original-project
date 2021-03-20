import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: () => null,
				}}
			>
				<Stack.Screen
					name="  Welcome"
					component={WelcomeScreen}
					options={{
						header: () => null,
					}}
				/>
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Log in" component={LoginScreen} />
				<Stack.Screen name="Main" component={MainScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigation;

const styles = StyleSheet.create({});
