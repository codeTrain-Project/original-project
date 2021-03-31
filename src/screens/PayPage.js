import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PayAmount } from '../components/PayAmount';
import { Colors } from '../index';

const PayPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<PayAmount navigation={navigation} />
		</View>
	);
};

export default PayPage;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
