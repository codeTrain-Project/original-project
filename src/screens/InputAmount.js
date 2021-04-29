import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing } from '../index';
import MyKeyboard from '../components/MyKeyboard';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

const InputAmount = ({ navigation }) => {
	const [state, setState] = useState('0');

	const funct = () => {
		console.log('clicked');
		if (parseInt(state) < 1) return;
		navigation.navigate('LinkMomo', {
			value: state,
		});
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			setState('0');
		});

		return unsubscribe;
	}, [navigation]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Ionicons
					name="md-close"
					size={28}
					color="white"
					style={styles.back}
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.output}>{`GH₵ ${state}`}</Text>
				<MyKeyboard setState={setState} state={state} />
				<View style={styles.btnContainer}>
					<Button label="Top up" btnColor="#12AA73" handler={funct} />
				</View>
			</View>
		</View>
	);
};

export default InputAmount;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.PRIMARY,
	},
	content: {
		flex: 1,
		marginVertical: '10%',
	},
	back: {
		marginLeft: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	output: {
		fontSize: 40,
		color: Colors.WHITE,
		alignSelf: 'center',
		marginTop: '10%',
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
});
