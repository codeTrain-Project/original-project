import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../index';

const Button = ({ label }) => {
	return (
		<TouchableOpacity style={styles.btnContainer}>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	btnContainer: {
		backgroundColor: Colors.PRIMARY,
		height: 52,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginVertical: 25,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 9,
	},

	label: {
		fontSize: 24,
		color: Colors.WHITE,
	},
});
