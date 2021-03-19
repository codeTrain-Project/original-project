import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../index';

const GrayBox = ({ value }) => {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<Text style={styles.text}>{value}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default GrayBox;

const styles = StyleSheet.create({
	container: {
		width: 65,
		height: 65,
		backgroundColor: Colors.GRAY_LIGHT,
		borderRadius: 15,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		alignSelf: 'center',
		marginTop: 20,
	},
});
