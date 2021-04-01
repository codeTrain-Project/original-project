import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PayAmount from '../components/PayAmount';
import { Colors } from '../index';
import { transfer, test } from '../store/actions/transactionActions';

const PayPage = ({ navigation, transfer, test }) => {
	return (
		<View style={styles.container}>
			<PayAmount
				navigation={navigation}
				label="Pay"
				action={() => transfer()}
				transactionType="transfer"
			/>
		</View>
	);
};

const mapDispatchToProps = {
	transfer,
	test,
};

export default connect(null, mapDispatchToProps)(PayPage);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});
