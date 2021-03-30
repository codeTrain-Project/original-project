import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import { Typography, Colors } from '../index';
import { Spacing } from '../index';

import { connect } from 'react-redux';
import { go } from '../store/actions/authActions';

const RegisterScreen = ({ navigation, go }) => {
	const [state, setState] = useState({
		email: '',
		phone: '',
	});

	// console.log(registerData);
	const handleChange = (name, value) => {
		setState({
			...state,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		go(state);
	};
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.formInput}>
					<Text style={styles.label}>Email</Text>

					<TextInput
						placeholder="Enter your email"
						placeholderTextColor="#cacaca"
						autoCapitalize="none"
						onChangeText={(text) => handleChange('email', text)}
						value={state.email}
						autoCorrect={false}
						style={styles.input}
					/>
				</View>

				<View style={styles.formInput}>
					<Text style={styles.label}>Phone</Text>

					<TextInput
						placeholder="Enter your phone number"
						placeholderTextColor="#cacaca"
						onChangeText={(text) => handleChange('phone', text)}
						autoCapitalize="none"
						value={state.phone}
						autoCorrect={false}
						style={styles.input}
					/>
				</View>

				<Text style={styles.error}>User already exists</Text>
			</View>
			<View style={styles.btnContainer}>
				<Button
					label="Next"
					handler={() => {
						handleSubmit();
						navigation.navigate('Register2');
					}}
				/>
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
	go,
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
