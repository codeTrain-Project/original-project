import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import { Typography } from '../index';

const WelcomeScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.heading}>Handy Money</Text>
				<Text style={styles.description}>
					Easiest means of transfering money with no charges!
				</Text>
			</View>
			<Image source={require('../../assets/img.png')} style={styles.image} />
			<View>
				<Button label="Log in" />
				<Button label="Register" style={styles.btn} />
			</View>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 25,
		marginVertical: '35%',
		justifyContent: 'space-between',
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
