import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import KeyboardComponent from '../components/KeyboardComponent';
import Menu from '../components/Menu';
import User from '../components/User';
import { Spacing, Colors } from '../index';

const MainScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<User color="white" marginHorizontal={Spacing.HORIZONTAL_WHITE_SPACE} />

				<View style={styles.keyContainer}>
					<KeyboardComponent />
					<View style={styles.btnContainer}>
						<Button label="Request" width="48%" btnColor="#12AA73" />
						<Button label="Pay" width="48%" btnColor="#12AA73" />
					</View>
				</View>

				<Menu border={0} navigation={navigation} />
			</View>
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.PRIMARY,
	},
	content: {
		flex: 1,
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
		marginTop: 50,
	},
});
