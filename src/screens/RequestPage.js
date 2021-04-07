import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PayAmount from '../components/PayAmount';
import { Colors } from '../index';
import { request, clean, all } from '../store/actions/transactionActions';

const RequestPage = ({ navigation, request }) => {
	return (
		<View style={styles.container}>
			<PayAmount
				navigation={navigation}
				label="Request"
				transacFunc={request}
			/>
		</View>
	);
};

const mapStateToProps = (state) => {
	return {
		input: state.transaction.keyboardData,
	};
};

const mapDispatchToProps = {
	request,
	clean,
	all,
};
export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
