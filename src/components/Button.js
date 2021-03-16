import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../index';

const Button = ({
	label,
	width = '100%',
	btnColor = Colors.PRIMARY,
	textColor = Colors.WHITE,
	height = 47,
	borderRadius = 200,
	handler,
}) => {
	return (
		<TouchableOpacity
			style={{
				...styles.btnContainer,
				width: width,
				backgroundColor: btnColor,
				height,
				borderRadius,
			}}
			onPress={() => handler()}
		>
			<Text style={{ ...styles.label, color: textColor }}>{label}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center',

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
