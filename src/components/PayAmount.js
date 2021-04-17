import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ActivityIndicator,
} from 'react-native';
import { Colors, Spacing } from '../index';
import { Ionicons } from '@expo/vector-icons';
import PayBtn from './PayBtn';
import TransparentBtn from './TransparentBtn';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

const PayAmount = ({ navigation, label, transacFunc, transaction, state }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function redirect() {
		navigation.navigate('Successful');
	}

	const onSubmit = (values) => {
		transacFunc(parseInt(state), values.receiver, values.purpose, redirect);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Ionicons
						name="md-close"
						size={30}
						color="black"
						style={styles.back}
						onPress={() => {
							navigation.navigate('Main');
						}}
					/>
					<Text style={styles.headeramount}>₵{state}</Text>
					{transaction.loading ? (
						<ActivityIndicator size="large" color={Colors.PRIMARY} />
					) : (
						<PayBtn label={label} handler={handleSubmit(onSubmit)} />
					)}
				</View>
			</View>

			<View style={styles.content}>
				<View style={styles.formContainer}>
					<Text style={styles.text}>To:</Text>

					<Controller
						name="receiver"
						control={control}
						rules={{
							required: 'This is required',
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								autoCorrect={false}
								autoCapitalize="none"
								style={styles.input}
								placeholder="Handy tag"
								placeholderTextColor="#cacaca"
								autoCapitalize="none"
								autoCorrect={false}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
					/>
				</View>

				<View style={styles.formContainer}>
					<Text style={styles.text}>For:</Text>

					<Controller
						name="purpose"
						control={control}
						rules={{
							required: 'This is required',
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								autoCorrect={false}
								style={styles.input}
								placeholder="Add a note"
								placeholderTextColor="#cacaca"
								autoCapitalize="none"
								autoCorrect={false}
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
					/>
				</View>
			</View>

			<View style={styles.contactText}>
				<Text style={styles.contact}>CONTACTS</Text>
			</View>

			<View style={styles.btnContainer}>
				<TransparentBtn
					label="Enable Contacts"
					handler={() => console.log('Contacts btn')}
				/>
			</View>

			{transaction.error ? (
				<Text style={styles.error}>{transaction.error}</Text>
			) : null}

			{errors.receiver?.type === 'required' && (
				<Text style={styles.error}>Tag of reciever required.</Text>
			)}
			{errors.purpose?.type === 'required' && (
				<Text style={styles.error}>Purpose is required.</Text>
			)}
		</View>
	);
};

const mapStateToProps = (state) => {
	return {
		transaction: state.transaction.transaction,
	};
};

export default connect(mapStateToProps, null)(PayAmount);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: '5%',
	},
	header: {
		borderBottomColor: Colors.GRAY_LIGHT,
		borderBottomWidth: 1,
		marginVertical: 20,
	},
	headerContent: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	headeramount: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	content: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	formContainer: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	text: {
		fontSize: 18,
	},
	input: {
		fontSize: 20,
		marginLeft: 5,
		width: '100%',
	},
	contactText: {
		height: 35,
		backgroundColor: Colors.GRAY_LIGHT,
	},
	contact: {
		fontSize: 14,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginTop: 7,
		opacity: 0.5,
	},

	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginTop: 10,
	},
	error: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		color: '#7a1515',
		fontSize: 17,
	},
});
