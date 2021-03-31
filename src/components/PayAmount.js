import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { Colors, Spacing } from '../index';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import PayBtn from './PayBtn';
import TransparentBtn from './TransparentBtn';

export const PayAmount = ({ navigation, label }) => {
	const [text, setText] = useState('');
	const changeText = (newText) => {
		setText(newText);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Ionicons
						name="md-close"
						size={30}
						color="black"
						style={styles.back}
						onPress={() => navigation.navigate('Main')}
					/>
					<Text style={styles.headeramount}>₵20</Text>
					<PayBtn label={label} />
				</View>
			</View>

			<View style={styles.content}>
				<View style={styles.formContainer}>
					<Text style={styles.text}>To:</Text>
					<TextInput
						autoCorrect={false}
						style={styles.input}
						placeholder="Handy tag"
					/>
				</View>

				<View style={styles.formContainer}>
					<Text style={styles.text}>For:</Text>
					<TextInput
						autoCorrect={true}
						style={styles.input}
						placeholder="Add a note"
					/>
				</View>
			</View>

			<View style={styles.contactText}>
				<Text style={styles.contact}>CONTACTS</Text>
			</View>

			<View style={styles.btnContainer}>
				<TransparentBtn
					label="Enable Contacts"
					handler={() => console.log('Contacts btn')}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: '5%',
	},
	header: {
		borderBottomColor: Colors.GRAY_LIGHT,
		borderBottomWidth: 1,
		marginVertical: 20,
	},
	headerContent: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	headeramount: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	content: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	formContainer: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	text: {
		fontSize: 18,
	},
	input: {
		fontSize: 20,
		marginLeft: 5,
	},
	contactText: {
		height: 35,
		backgroundColor: Colors.GRAY_LIGHT,
	},
	contact: {
		fontSize: 14,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginTop: 7,
		opacity: 0.5,
	},

	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginTop: 10,
	},
});
