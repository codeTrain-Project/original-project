import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import { Typography } from '../index';
import { Spacing, Colors } from '../index';

const WelcomeScreen = ({ navigation }) => {
	const loginFunc = () => {
		navigation.navigate('Log in');
	};

	const registerFunc = () => {
		navigation.navigate('Register');
	};
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.textContainer}>
					<Text style={styles.heading}>Handy Money</Text>
					<Text style={styles.description}>
						Easiest means of transfering money with no charges!
					</Text>
				</View>
				<Image source={require('../../assets/img.png')} style={styles.image} />
				<View>
					<Button label="Log in" handler={loginFunc} />
					<Button label="Register" style={styles.btn} handler={registerFunc} />
				</View>
			</View>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '10%',
		justifyContent: 'space-between',
		// backgroundColor: 'green',
	},
	textContainer: {
		// marginTop: '35%',
		width: '80%',
		alignSelf: 'center',
	},
	heading: {
		fontSize: 40,
		fontWeight: 'bold',
		letterSpacing: 1,
		textAlign: 'center',
		opacity: 0.85,
	},
	description: {
		fontSize: Typography.FONT_SIZE_NORMAL,
		textAlign: 'center',
		opacity: 0.7,
		marginVertical: 20,
	},

	image: {
		width: 265.46,
		height: 192.68,
		alignSelf: 'center',
	},
	btn: {
		marginTop: 30,
	},
});
