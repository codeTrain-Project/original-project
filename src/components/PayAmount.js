import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { Colors, Spacing } from '../index';
import { Ionicons } from '@expo/vector-icons';
import PayBtn from './PayBtn';
import TransparentBtn from './TransparentBtn';
import { connect } from 'react-redux';
import { transfer, clean, all } from '../store/actions/transactionActions';

const PayAmount = ({
	navigation,
	label,
	action,
	input,
	transfer,
	clean,
	all,
	transactionType,
}) => {
	const [state, setState] = useState({
		receiver: '',
		purpose: '',
	});

	const handleChange = (name, value) => {
		setState({
			...state,
			[name]: value,
		});
	};

function redirect() {
	navigation.navigate('Successful')
}

	const handleSubmit = () => {
		// action(input, state.receiver, state.purpose);
		// console.log(input, state.receiver, state.purpose);
		transfer(parseInt(input), state.receiver, state.purpose, redirect);

	};
	// console.log('Mounted pay');
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Ionicons
						name="md-close"
						size={30}
						color="black"
						style={styles.back}
						onPress={() => {
							navigation.navigate('Main');
							clean();
							all();
						}}
					/>
					<Text style={styles.headeramount}>₵{input}</Text>
					<PayBtn label={label} handler={() => handleSubmit()} />
				</View>
			</View>

			<View style={styles.content}>
				<View style={styles.formContainer}>
					<Text style={styles.text}>To:</Text>
					<TextInput
						autoCorrect={false}
						style={styles.input}
						placeholder="Handy tag"
						value={state.receiver}
						onChangeText={(text) => handleChange('receiver', text)}
					/>
				</View>

				<View style={styles.formContainer}>
					<Text style={styles.text}>For:</Text>
					<TextInput
						autoCorrect={true}
						style={styles.input}
						placeholder="Add a note"
						value={state.purpose}
						onChangeText={(text) => handleChange('purpose', text)}
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

const mapStateToProps = (state) => {
	return {
		input: state.transaction.keyboardData,
	};
};

const mapDispatchToProps = {
	transfer,
	clean,
	all,
};

export default connect(mapStateToProps, mapDispatchToProps)(PayAmount);

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
