import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src';
import MainNavigator from './src/navigation/index';
import Try from './src/screens/Try';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
	return (
		<>
			<MainNavigator />
		</>
	);
}
