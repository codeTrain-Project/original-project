import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EnterAmount from '../components/EnterAmount';

const AddMoneyScreen = ({ navigation }) => {
	return (
		<EnterAmount
			heading="Top up Money"
			label="Add"
			btnFnc={() => {
				navigation.navigate('Try');
			}}
		/>
	);
};

export default AddMoneyScreen;

const styles = StyleSheet.create({});
