import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PayAmount from '../components/PayAmount';
import { Colors } from '../index';
import { transfer, clean, all } from '../store/actions/transactionActions';

const PayPage = ({ navigation, transfer }) => {
	return (
		<View style={styles.container}>
			<PayAmount navigation={navigation} label="Pay" transacFunc={transfer} />
		</View>
	);
};

const mapStateToProps = (state) => {
	return {
		input: state.transaction.keyboardData,
	};
};

const mapDispatchToProps = {
	transfer,
	clean,
	all,
};

export default connect(mapStateToProps, mapDispatchToProps)(PayPage);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
