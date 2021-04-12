import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Spacing } from '../index';

const User = ({ color, mt = 70, marginHorizontal = 0, handler }) => {
	return (
		<TouchableWithoutFeedback onPress={() => handler()}>
			<View
				style={{
					...styles.icon,
					marginHorizontal: marginHorizontal,
					marginTop: mt,
				}}
			>
				<FontAwesome name="user-circle-o" size={50} color={color} />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default User;

const styles = StyleSheet.create({
	icon: {
		alignSelf: 'flex-end',
	},
});
