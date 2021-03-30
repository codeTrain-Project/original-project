import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	YellowBox,
	LogBox,
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { Colors, Spacing } from '../index';
import { go, signUp } from '../store/actions/authActions';

// YellowBox.ignoreWarnings(['Setting a timer']);
// const _console = { ...console };
// console.warn = (message) => {
// 	if (message.indexOf('Setting a timer') <= -1) {
// 		_console.warn(message);
// 	}
// };

const RegisterScreen3 = ({ go, signUp, registerData }) => {
	useEffect(() => {
		LogBox.ignoreLogs(['Setting a timer ']);
		console.log('effect');
	}, [LogBox]);

	const [tagName, setTagName] = useState('');

	const handleChange = (name, value) => {
		setTagName(value);
	};

	const handleSubmit = () => {
		go({ tagName });
		signUp();
	};
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View>
					<Text style={styles.heading1}>Choose a Handy tag</Text>
					<Text style={styles.heading2}>
						Your unique name for getting paid by everyone
					</Text>
					<View style={styles.formInput}>
						<TextInput
							placeholder="₵TagName"
							placeholderTextColor="#363636"
							autoCapitalize="none"
							autoCorrect={false}
							value={tagName}
							onChangeText={(text) => handleChange('tagName', text)}
							style={styles.input}
						/>
					</View>
				</View>

				<Button label="Done" handler={() => handleSubmit()} />
			</View>
		</View>
	);
};

const mapStateToProps = ({ auth }) => ({
	registerData: auth.registerData,
});

const mapDispatchToProps = {
	go,
	signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen3);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	content: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '25%',
		justifyContent: 'space-between',
	},
	heading1: {
		fontSize: 24,
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
});
