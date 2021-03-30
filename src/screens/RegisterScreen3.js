import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import { Colors, Spacing } from '../index';
const RegisterScreen3 = () => {
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
							style={styles.input}
						/>
					</View>
				</View>

				<Button label="Done" handler={() => navigation.navigate('Main')} />
			</View>
		</View>
	);
};

export default RegisterScreen3;

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
