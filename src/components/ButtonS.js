import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../index';

const ButtonS = ({ label, width = '50%', btnColor = Colors.PRIMARY }) => {
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
    )
}
export default ButtonS;
const styles = StyleSheet.create({
	btnContainer: {
		backgroundColor: Colors.PRIMARY,
		height: 24,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 200,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 9,
	},

	label: {
		fontSize: 15,
		color: Colors.WHITE,
	},
});
