import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src';
import RegisterScreen2 from './src/screens/RegisterScreen2';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<RegisterScreen2 />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
