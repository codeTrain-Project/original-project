import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ActivityIndicator,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { Colors, Spacing } from '../index';
import { update, all, signUp } from '../store/actions/authActions';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { useDispatch } from 'react-redux';
import { SIGN_UP_FAILURE } from '../store/types';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen3 = ({ update, all, signUp, users, navigation }) => {
	// console.log('usersusersusersusersusers', users);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();

	const onSubmit = async (value) => {
		const test = await users.find((user) => user.tagName === value.tag);
		if (test) {
			dispatch({
				type: SIGN_UP_FAILURE,
				payload: 'Your tag name is already in use, try a different one',
			});
			return;
		}

		update(value);
		all();
		signUp();
	};

	const authRegister = useSelector((state) => state.auth.signUp);
	console.log(authRegister);

	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			style={styles.container}
		>
			<View style={styles.content}>
				<View>
					<Ionicons
						name="ios-arrow-back"
						size={24}
						color="black"
						style={styles.back}
						onPress={() => navigation.goBack()}
					/>
					<Text style={styles.heading1}>Choose a Handy tag</Text>
					<Text style={styles.heading2}>
						Your unique name for getting paid by everyone
					</Text>
					<View style={styles.formInput}>
						<Controller
							name="tag"
							control={control}
							rules={{
								required: 'This is required',
								minLength: 4,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									placeholder="???TagName"
									placeholderTextColor="#363636"
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

					{errors.tag?.type === 'required' && (
						<Text style={styles.error}>Personal tag is required.</Text>
					)}

					{errors.tag?.type === 'minLength' && (
						<Text style={styles.error}>Tag must be at least 4 characters.</Text>
					)}
				</View>
				{authRegister.error ? (
					<Text style={styles.error}>{authRegister.error}</Text>
				) : null}

				{authRegister.loading ? (
					<ActivityIndicator size="large" color={Colors.PRIMARY} />
				) : (
					<Button label="Done" handler={handleSubmit(onSubmit)} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const mapStateToProps = (state) => {
	return {
		users: state.firestore.ordered.users,
	};
};
const mapDispatchToProps = {
	update,
	all,
	signUp,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{ collection: 'users' }])
)(RegisterScreen3);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	content: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '15%',
		justifyContent: 'space-between',
	},
	heading1: {
		fontSize: 24,
		marginTop: 40,
	},
	heading2: {
		fontSize: 18,
		color: Colors.GRAY_DARK,
		marginVertical: 10,
	},
	input: {
		textAlign: 'left',
		fontSize: 24,
		height: 50,
	},
	error: {
		color: '#7a1515',
		fontSize: 15,
	},
});
