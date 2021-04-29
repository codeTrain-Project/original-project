import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PayAmount from '../components/PayAmount';
import { Colors } from '../index';
import { transfer } from '../store/actions/transactionActions';

const PayPage = ({ navigation, transfer, route }) => {
	const { state } = route.params;

	return (
		<View style={styles.container}>
			<PayAmount
				navigation={navigation}
				label="Pay"
				transacFunc={transfer}
				state={state}
			/>
		</View>
	);
};

const mapDispatchToProps = {
	transfer,
};

export default connect(null, mapDispatchToProps)(PayPage);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
