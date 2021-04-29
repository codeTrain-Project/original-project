import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNWeb from '../utils/RNWeb';

const OTPScreen = ({ route }) => {
	const { momoUri } = route.params;
	return (
		<View>
			<Text>Verify</Text>
			<RNWeb uri={momoUri} />
		</View>
	);
};

export default OTPScreen;

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
	},
});
