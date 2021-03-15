import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import KeyboardComponent from '../components/KeyboardComponent';
import Menu from '../components/Menu';
import User from '../components/User';
import { Spacing, Colors } from '../index';

const MainScreen = () => {
	return (
		<View style={styles.container}>
			<User color="white" marginHorizontal={Spacing.HORIZONTAL_WHITE_SPACE} />

			<View style={styles.keyContainer}>
				<KeyboardComponent />
				<View style={styles.btnContainer}>
					<Button label="Request" width="48%" btnColor="#12AA73" />
					<Button label="Pay" width="48%" btnColor="#12AA73" />
				</View>
			</View>

			<Menu />
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginTop: 80,
	},
	keyContainer: {
		marginVertical: 100,
		// justifyContent: 'space-between',
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30,
	},
});
