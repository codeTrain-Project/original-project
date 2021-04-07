import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import KeyboardComponent from '../components/KeyboardComponent';
import User from '../components/User';
import { Spacing, Colors } from '../index';
import { useSelector } from 'react-redux';

const MainScreen = ({ navigation }) => {
	const trans = useSelector((state) => state.transaction);

	const func = () => {
		if (trans.keyboardData < 1) return;
		navigation.navigate('Pay');
	};
	const funct = () => {
		if (trans.keyboardData < 1) return;
		navigation.navigate('Request');
	};

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
							handler={funct}
						/>
						<Button label="Pay" width="48%" btnColor="#12AA73" handler={func} />
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
