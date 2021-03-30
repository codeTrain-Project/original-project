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
import ModalScreen from '../screens/ModalScreen';
import AddMoneyScreen from '../screens/AddMoneyScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: () => null,
				}}
			>
				<Stack.Screen name="Main" component={MainScreen} />
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;

const styles = StyleSheet.create({});
