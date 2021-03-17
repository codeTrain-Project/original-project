import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src';
import MainScreen from './src/screens/MainScreen';
import RequestScreen from './src/screens/RequestScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'
export default function App() {
	return (
		<View style={styles.container}>
			{/* <MainScreen /> */}
			{/* <WelcomeScreen/> */}
			<RequestScreen/>
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
