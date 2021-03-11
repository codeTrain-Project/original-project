import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src';
import MainScreen from './src/screens/MainScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<MainScreen />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.PRIMARY,
	},
});
