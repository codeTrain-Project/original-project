import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Spacing, Colors } from '../index';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProfileContent = ({ label, icon }) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				{icon}
				<Text style={styles.text}>{label}</Text>
			</View>
			<Ionicons name="ios-arrow-forward" size={24} color={Colors.GRAY_MEDIUM} />
		</View>
	);
};

export default ProfileContent;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		// marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 20,
		// backgroundColor: 'red',
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		fontWeight: 'bold',
		marginLeft: 10,
		fontSize: 20,
	},
});
