import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {

	return (
		<View style={styles.container}>
			<WelcomeScreen />
			<StatusBar style="auto" />
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
