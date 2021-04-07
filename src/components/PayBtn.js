import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../index';

const PayBtn = ({ label, handler }) => {
	return (
		<TouchableOpacity
			style={{
				...styles.btnContainer,
			}}
			onPress={() => handler()}
		>
			<Text style={{ ...styles.label }}>{label}</Text>
		</TouchableOpacity>
	);
};

export default PayBtn;

const styles = StyleSheet.create({
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.PRIMARY,
		height: 30,
		paddingHorizontal: 15,
		borderRadius: 50,
		// paddingVertical: 30,
	},

	label: {
		fontSize: 17,
		color: Colors.WHITE,
	},
});
