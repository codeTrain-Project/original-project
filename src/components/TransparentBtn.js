import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../index';

const TransparentBtn = ({
	label,
	btnColor = Colors.WHITE,
	textColor = Colors.PRIMARY,
	handler,
}) => {
	return (
		<TouchableOpacity
			style={{
				...styles.btnContainer,
				backgroundColor: btnColor,
			}}
			onPress={() => handler()}
		>
			<Text style={{ ...styles.label, color: textColor }}>{label}</Text>
		</TouchableOpacity>
	);
};

export default TransparentBtn;

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 25,
		borderWidth: 0.5,
		borderColor: Colors.PRIMARY,
		height: 60,
		borderRadius: 10,
	},

	label: {
		fontSize: 19,
		color: Colors.WHITE,
		textTransform: 'capitalize',
	},
});
