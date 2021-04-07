import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { Colors } from '../index';
import { connect } from 'react-redux';
import { keyboardUpdate, all } from '../store/actions/transactionActions';

const KeyboardComponent = ({
	btnColor = Colors.WHITE,
	txtColor = Colors.WHITE,
	keyboardUpdate,
	all,
	keyboardData,
}) => {
	// const [text, setText] = useState('0');
	const changeText = (newText) => {
		keyboardUpdate(newText);
		// all();
	};

	// console.log('from keyboard', keyboardData);

	return (
		<View>
			<TextInput
				autoCorrect={false}
				style={{ ...styles.input, color: txtColor }}
				defaultValue={`GH₵ ${keyboardData}`}
				onSubmitEditing={Keyboard.dismiss}
			/>

			{/* <Text style={{ ...styles.text, color: txtColor }}>{`GH₵ ${text}`}</Text> */}
			<VirtualKeyboard
				color={btnColor}
				pressMode="string"
				onPress={(val) => changeText(val)}
				decimal={true}
			/>
		</View>
	);
};

const mapStateToProps = ({ transaction }) => {
	// console.log('Map State to props', transaction);
	return {
		keyboardData: transaction.keyboardData,
	};
};
const mapDispatchToProps = {
	keyboardUpdate,
	all,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardComponent);

const styles = StyleSheet.create({
	text: {
		fontSize: 55,
		textAlign: 'center',
		marginBottom: 40,
	},
	input: {
		textAlign: 'center',
		height: 50,
		fontSize: 45,
		height: 100,
	},
});
