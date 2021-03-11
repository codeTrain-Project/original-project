import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../index';

const Button = ({ label, width = '100%', btnColor = Colors.PRIMARY }) => {
	return (
		<TouchableOpacity
			style={{
				...styles.btnContainer,
				width: width,
				backgroundColor: btnColor,
			}}
		>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	btnContainer: {
		backgroundColor: Colors.PRIMARY,
		height: 47,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 200,
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
		fontSize: 21,
		color: Colors.WHITE,
	},
});
