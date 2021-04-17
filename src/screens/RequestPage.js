import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PayAmount from '../components/PayAmount';
import { Colors } from '../index';
import { request } from '../store/actions/transactionActions';

const RequestPage = ({ navigation, request, route }) => {
	const { state } = route.params;

	return (
		<View style={styles.container}>
			<PayAmount
				navigation={navigation}
				label="Request"
				transacFunc={request}
				state={state}
			/>
		</View>
	);
};

const mapDispatchToProps = {
	request,
};
export default connect(null, mapDispatchToProps)(RequestPage);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
