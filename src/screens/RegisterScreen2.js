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
import { Feather } from '@expo/vector-icons';

const RegisterScreen = () => {
	const [view, setView] = useState(false);
	console.log(view);
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.formInput}>
					<Text style={styles.label}>Password</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							placeholder="Enter your password"
							placeholderTextColor="#cacaca"
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry={!view}
							style={styles.input}
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
								<Feather name="eye-off" size={21} color={Colors.GRAY_DARK} />
							</TouchableOpacity>
						)}
					</View>
				</View>

				<View style={styles.formInput}>
					<Text style={styles.label}>Confirm Password</Text>
					<View style={styles.passwordContainer}>
						<TextInput
							placeholder="Enter your password"
							placeholderTextColor="#cacaca"
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry={!view}
							style={styles.input}
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
								<Feather name="eye-off" size={21} color={Colors.GRAY_DARK} />
							</TouchableOpacity>
						)}
					</View>
				</View>

				<Text style={styles.error}>Password does not match</Text>
			</View>
			<View style={styles.btnContainer}>
				<Button label="Register" />
			</View>

			<View style={styles.txtContainer}>
				<Text style={styles.text}>Already have an account ? </Text>
				<Text style={[styles.text, styles.signupTxt]}>LOG IN</Text>
			</View>
		</View>
	);
};

export default RegisterScreen;

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
		marginVertical: 20,
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
