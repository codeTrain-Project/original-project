import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './src';
import AddMoneyScreen from './src/screens/AddMoneyScreen';
import AmountCashOutScreen from './src/screens/AmountCashOutScreen';
import FinalAddMoneyScreen from './src/screens/FinalAddMoneyScreen';
import FinalCashOutScreen from './src/screens/FinalCashOutScreen';
import MainScreen from './src/screens/MainScreen';
import Try from './src/screens/Try';
export default function App() {
	return (
		<View style={styles.container}>
			<FinalCashOutScreen />
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
