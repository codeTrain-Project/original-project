import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { Colors } from '../index';

const KeyboardComponent = ({
	btnColor = Colors.WHITE,
	txtColor = Colors.WHITE,
}) => {
	const [text, setText] = useState('0');
	const changeText = (newText) => {
		setText(newText);
	};

	useEffect(() => setText('0'));
	return (
		<View>
			<Text style={{ ...styles.text, color: txtColor }}>{`GH₵ ${text}`}</Text>
			<VirtualKeyboard
				color={Colors.WHITE}
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
});
