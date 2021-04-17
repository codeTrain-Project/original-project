import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import Button from '../components/Button';
import { Typography, Colors } from '../index';
import { Spacing } from '../index';
import { useForm, Controller } from 'react-hook-form';

import { connect } from 'react-redux';
import { update, all } from '../store/actions/authActions';

const RegisterScreen = ({ navigation, update, all }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (values) => {
		update(values);
		all();
		navigation.navigate('Register2');
	};

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.formInput}>
					<Text style={styles.label}>Email</Text>

					<Controller
						name="email"
						control={control}
						rules={{
							required: 'This is required',
							pattern: /^^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Enter your email"
								placeholderTextColor="#cacaca"
								autoCapitalize="none"
								autoCorrect={false}
								onBlur={onBlur}
								style={styles.input}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
					/>
				</View>

				{errors.email?.type === 'pattern' && (
					<Text style={styles.error}>Email is poorly formatted.</Text>
				)}
				{errors.email?.type === 'required' && (
					<Text style={styles.error}>Email is required.</Text>
				)}

				<View style={styles.formInput}>
					<Text style={styles.label}>Phone</Text>

					<Controller
						name="phone"
						control={control}
						rules={{
							required: 'This is required',
							minLength: 10,
							pattern: /^\d+$/,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Enter your phone number"
								placeholderTextColor="#cacaca"
								autoCapitalize="none"
								autoCorrect={false}
								onBlur={onBlur}
								style={styles.input}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
					/>
				</View>

				{errors.phone?.type === 'pattern' && (
					<Text style={styles.error}>Phone number incorrect.</Text>
				)}
				{errors.phone?.type === 'minLength' && (
					<Text style={styles.error}>Phone number incorrect.</Text>
				)}
				{errors.email?.type === 'required' && (
					<Text style={styles.error}>Email is required.</Text>
				)}
			</View>
			<View style={styles.btnContainer}>
				<Button label="Next" handler={handleSubmit(onSubmit)} />
			</View>

			<View style={styles.txtContainer}>
				<Text style={styles.text}>Already have an account ? </Text>
				<Text
					style={[styles.text, styles.signupTxt]}
					onPress={() => navigation.navigate('Log in')}
				>
					LOG IN
				</Text>
			</View>
		</View>
	);
};

const mapStateToProps = ({ auth }) => {
	// console.log(auth);
	return {
		registerData: auth.registerData,
	};
};

const mapDispatchToProps = {
	update,
	all,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '45%',
		// justifyContent: 'space-between',
	},

	formInput: {
		marginVertical: 25,
	},
	label: {
		textTransform: 'uppercase',
		color: Colors.GRAY_DARK,
		letterSpacing: 1,
	},
	input: {
		borderBottomColor: Colors.GRAY_MEDIUM,
		borderBottomWidth: 1,
		textAlign: 'left',
		fontSize: 18,
		height: 50,
	},

	error: {
		color: '#7a1515',
		fontSize: 15,
	},
	btnContainer: {
		marginVertical: 20,
	},
	txtContainer: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
	text: {
		fontSize: Typography.FONT_SIZE_NORMAL,
		color: 'black',
		opacity: 0.7,
	},
	signupTxt: {
		color: Colors.PRIMARY,
		opacity: 0.9,
	},
});
