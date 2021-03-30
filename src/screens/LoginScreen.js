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
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';

const LoginScreen = ({ navigation }) => {
	const [view, setView] = useState(false);
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = (name, value) => {
		setState({
			...state,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		login(state);
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.headingContainer}>
					<Text style={styles.heading}>Hello there</Text>
					<View style={styles.circle}></View>
				</View>

				<View>
					<View style={styles.formInput}>
						<Text style={styles.label}>Email</Text>

						<TextInput
							placeholder="Enter your email"
							placeholderTextColor="#cacaca"
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							value={user.email}
							onChangeText={(text) => handleChange('email', text)}
						/>
					</View>

					<View style={styles.formInput}>
						<Text style={styles.label}>Password</Text>
						<View style={styles.passwordContainer}>
							<TextInput
								placeholder="Enter your password"
								placeholderTextColor="#a6a2a2"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={!view}
								style={styles.input}
								value={user.password}
								onChangeText={(text) => handleChange('password', text)}
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
					<Text style={styles.error}>Incorrect login credentials</Text>
				</View>

				<Button label="Login" handler={() => navigation.navigate('Main')} />

				<View style={styles.txtContainer}>
					<Text style={styles.text}>New to Handy Money ? </Text>
					<Text
						style={[styles.text, styles.signupTxt]}
						onPress={() => navigation.navigate('Register')}
					>
						SIGN UP
					</Text>
				</View>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	content: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '35%',
		justifyContent: 'space-between',
	},
	headingContainer: {
		width: '37%',
		flexDirection: 'row',
	},
	heading: {
		fontSize: 48,
		fontWeight: '700',
		textTransform: 'capitalize',
		lineHeight: 60,
	},
	circle: {
		height: 20,
		width: 20,
		backgroundColor: Colors.PRIMARY,
		borderRadius: 20,
		marginTop: 85,
	},
	formInput: {
		// backgroundColor: 'red',
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
