import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../index';

const GrayBox = ({ value, setVl, color, outClicked, setOutClicked }) => {
	const [clicked, setClicked] = useState(false);

	return (
		<TouchableOpacity
			onPress={() => {
				setVl(value);
				setClicked(!clicked);
			}}
		>
			<View
				style={{
					...styles.container,
					backgroundColor: clicked ? Colors.GRAY_DARK : color,
				}}
			>
				<Text style={styles.text}>{`₵${value}`}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default GrayBox;

const styles = StyleSheet.create({
	container: {
		width: 65,
		height: 65,
		borderRadius: 15,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		alignSelf: 'center',
		marginTop: 20,
	},
});
