import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Button from './Button';
import { Colors, Spacing } from '../index';
import VirtualKeyboard from 'react-native-virtual-keyboard';

const EnterAmountFinal = ({label}) => {
	const [text, setText] = useState('');
	const changeText = (newText) => {
		setText(newText);
	};
	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<Text style={styles.heading}>Link your MTN mobile money number</Text>
				<TextInput
					autoCorrect={false}
					style={styles.input}
					placeholder="Mobile Money Number"
					onSubmitEditing={Keyboard.dismiss}
					defaultValue={text}
				/>
			</View>

			<View>
				<VirtualKeyboard
					color="black"
					pressMode="string"
					onPress={(val) => changeText(val)}
					decimal={true}
				/>
			</View>
			<View style={styles.btnContainer}>
				<Button label={label} />
			</View>
		</View>
	);
};

export default EnterAmountFinal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: '35%',
		justifyContent: 'space-between',
	},
	heading: {
		fontSize: 24,
		letterSpacing: 1,
	},
	input: {
		fontSize: 24,
		marginTop: 20,
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
});
