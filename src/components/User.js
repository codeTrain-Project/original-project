import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Spacing } from '../index';

const User = ({ color, mt = 70, marginHorizontal = 0 }) => {
	return (
		<View style={{ ...styles.icon, marginHorizontal: marginHorizontal }}>
			<FontAwesome name="user-circle-o" size={40} color={color} />
		</View>
	);
};

export default User;

const styles = StyleSheet.create({
	icon: {
		alignSelf: 'flex-end',
	},
});
