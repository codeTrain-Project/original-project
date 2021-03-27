import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src';
import { RequestAmount } from './src/components/RequestAmount';
import MainNavigator from './src/navigation/index';
import {ActivityScreen}  from './src/screens/ActivityScreen';
import { RequestPage } from './src/screens/RequestPage';
import Try from './src/screens/Try';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <RequestPage/> */}
			<ActivityScreen/>
		</View>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: 500,
// 		backgroundColor: 'red',
// 	},
// });

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
