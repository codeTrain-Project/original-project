import React, { useState, useRef } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import Button from '../components/Button';
import { Typography, Colors } from '../index';
import { Spacing } from '../index';
import { Feather } from '@expo/vector-icons';
import { update, all } from '../store/actions/authActions';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation, update, all }) => {
	const [view, setView] = useState(false);

	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const password = useRef({});
	password.current = watch('password', '');

	const onSubmit = (values) => {
		update(values);
		all();
		navigation.navigate('Register3');
	};

	return (
		<TouchableWithoutFeedback
			style={styles.container}
			onPress={() => Keyboard.dismiss()}
		>
			<View style={styles.content}>
				<Ionicons
					name="ios-arrow-back"
					size={24}
					color="black"
					style={styles.back}
					onPress={() => navigation.goBack()}
				/>
				<View>
					<View style={styles.formInput}>
						<Text style={styles.label}>Password</Text>

						<Controller
							name="password"
							control={control}
							rules={{
								required: 'This is required',
								minLength: 8,
							}}
							render={({ field: { onChange, onBlur, value, ref } }) => (
								<View style={styles.passwordContainer}>
									<TextInput
										placeholder="Enter your password"
										placeholderTextColor="#a6a2a2"
										autoCapitalize="none"
										autoCorrect={false}
										onBlur={onBlur}
										secureTextEntry={true}
										style={styles.input}
										value={value}
										onChangeText={(value) => onChange(value)}
										inputRef={ref}
										// onBlur={Keyboard.dismiss}
									/>

									{view ? (
										<TouchableOpacity
											onPress={() => setView(false)}
											style={styles.icon}
										>
											<Feather name="eye" size={21} color="black" />
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											onPress={() => setView(true)}
											style={styles.icon}
										>
											<Feather
												name="eye-off"
												size={21}
												color={Colors.GRAY_DARK}
											/>
										</TouchableOpacity>
									)}
								</View>
							)}
						/>
					</View>
					{errors.password?.type === 'required' && (
						<Text style={styles.error}>Password is required.</Text>
					)}

					{errors.password?.type === 'minLength' && (
						<Text style={styles.error}>Password is at least 8 characters.</Text>
					)}

					<View style={styles.formInput}>
						<Text style={styles.label}>Confirm Password</Text>

						<Controller
							name="confirmPassword"
							control={control}
							rules={{
								required: 'This is required',
								minLength: 8,
								validate: (value) =>
									value === password.current || 'The passwords do not match',
							}}
							render={({ field: { onChange, onBlur, value, ref } }) => (
								<View style={styles.passwordContainer}>
									<TextInput
										placeholder="Enter your password"
										placeholderTextColor="#a6a2a2"
										autoCapitalize="none"
										autoCorrect={false}
										onBlur={onBlur}
										secureTextEntry={!view}
										style={styles.input}
										value={value}
										onChangeText={(value) => onChange(value)}
										inputRef={ref}
										// onBlur={Keyboard.dismiss}
									/>
									{view ? (
										<TouchableOpacity
											onPress={() => setView(false)}
											style={styles.icon}
										>
											<Feather name="eye" size={21} color="black" />
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											onPress={() => setView(true)}
											style={styles.icon}
										>
											<Feather
												name="eye-off"
												size={21}
												color={Colors.GRAY_DARK}
											/>
										</TouchableOpacity>
									)}
								</View>
							)}
						/>
					</View>

					{errors.confirmPassword?.type === 'validate' && (
						<Text style={styles.error}>Passwords do not match. </Text>
					)}

					{errors.confirmPassword?.type === 'required' && (
						<Text style={styles.error}>Password is required.</Text>
					)}

					{errors.confirmPassword?.type === 'minLength' && (
						<Text style={styles.error}>
							Password must be at least 8 characters.
						</Text>
					)}
					<View style={styles.btnContainer}>
						<Button label="Register" handler={handleSubmit(onSubmit)} />
					</View>
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
		</TouchableWithoutFeedback>
	);
};

const mapDispatchToProps = {
	update,
	all,
};

export default connect(null, mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
		// backgroundColor: 'red',
	},
	content: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		justifyContent: 'space-around',
		// marginVertical: '45%',
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
	passwordContainer: {
		position: 'relative',
	},

	icon: {
		position: 'absolute',
		right: 0,
		top: 20,
	},
	error: {
		color: '#7a1515',
		fontSize: 15,
	},
	txtContainer: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
	btnContainer: {
		// marginVertical: 20,
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
