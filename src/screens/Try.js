import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

const Try = () => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Enter your password"
				placeholderTextColor="#a6a2a2"
				autoCapitalize="none"
				autoCorrect={false}
				onPress={() => Keyboard.dismiss()}
			/>
		</View>
	);
};

export default Try;

const styles = StyleSheet.create({
	container: {
		marginTop: 500,
	},
});
