import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Spacing } from '../index';

const User = ({ color, mt = 70 }) => {
	return (
		<View style={{ ...styles.icon }}>
			<FontAwesome name="user-circle-o" size={50} color={color} />
		</View>
	);
};

export default User;

const styles = StyleSheet.create({
	icon: {
		alignSelf: 'flex-end',
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
});
