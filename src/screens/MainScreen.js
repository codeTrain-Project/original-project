import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import KeyboardComponent from '../components/KeyboardComponent';
import User from '../components/User';
import { Spacing, Colors } from '../index';

const MainScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<User
					color="white"
					marginHorizontal={Spacing.HORIZONTAL_WHITE_SPACE}
					handler={() => navigation.navigate('Profile')}
				/>

				<View style={styles.keyContainer}>
					<KeyboardComponent />
					<View style={styles.btnContainer}>
						<Button
							label="Request"
							width="48%"
							btnColor="#12AA73"
							handler={() => navigation.navigate('Request')}
						/>
						<Button
							label="Pay"
							width="48%"
							btnColor="#12AA73"
							handler={() => navigation.navigate('Pay')}
						/>
					</View>
				</View>
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
		marginTop: '2%',
	},
	keyContainer: {
		marginVertical: '5%',
		// justifyContent: 'space-between',
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '5%',
	},
});
