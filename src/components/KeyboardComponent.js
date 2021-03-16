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
import { useKeyboard } from '@react-native-community/hooks';

const KeyboardComponent = ({
	btnColor = Colors.WHITE,
	txtColor = Colors.WHITE,
}) => {
	const [text, setText] = useState('0');
	const changeText = (newText) => {
		setText(newText);
	};

	return (
		<View>
			<TextInput
				autoCorrect={false}
				style={{ ...styles.input, color: txtColor }}
				defaultValue={`GH₵ ${text}`}
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

export default KeyboardComponent;

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
