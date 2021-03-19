import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Spacing, Colors } from '../index';
import Button from './Button';
import KeyboardComponent from './KeyboardComponent';

const EnterAmount = ({ heading, label }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{heading}</Text>
			<View>
				<KeyboardComponent btnColor="black" txtColor="#46D8A3" />
			</View>
			<View style={styles.btnContainer}>
				<Button
					label={label}
					height={60}
					borderRadius={10}
					btnColor={Colors.WHITE}
					textColor="#46D8A3"
				/>
			</View>
		</View>
	);
};

export default EnterAmount;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
		marginVertical: '35%',
		justifyContent: 'space-between',
	},
	heading: {
		fontSize: 20,
		textAlign: 'center',
		letterSpacing: 1,
		color: Colors.GRAY_DARK,
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
});
