import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PayAmount } from '../components/PayAmount';
import RequestAmount from '../components/RequestAmount';
import { Colors } from '../index';

const RequestPage = () => {
	return (
		<View style={styles.container}>
			<PayAmount label="Request" />
		</View>
	);
};

export default RequestPage;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
