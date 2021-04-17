import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { Colors, Spacing } from '../index';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import TransparentBtn from '../components/TransparentBtn';
import RNWeb from '../utils/RNWeb';
import { Ionicons } from '@expo/vector-icons';

const LinkMomo = ({ label, navigation }) => {
	const [text, setText] = useState('');
	const changeText = (newText) => {
		setText(newText);
	};

	const [momoUri, setMomoUri] = useState(null);
	// a function to be called when the payment is completed
	// you can do anything you want after successfull payment like
	//navigating to a new screen etc.
	function closeWebView() {
		navigation.navigate('Successful');
		setMomoUri(null);
	}

	function onSubmit(text) {
		console.log(text);
		if (text.length === 10) {
			let data = {
				tx_ref: 'HAY-13' + (1000 + Math.floor(Math.random * 100000)),
				amount: '150',
				currency: 'GHS',
				network: 'MTN',
				email: 'hhuzaifah050@gmail.com',
				phone_number: text,
				redirect_url: 'https://codetraingh.com',
			};
			fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_ghana', {
				method: 'POST', // or 'PUT'
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'Bearer FLWSECK_TEST-4b947bbc5e074b406b6b91624a8cec36-X', //remember to replace this with your flutterwave api key
				},
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
					setMomoUri(data.meta.authorization.redirect);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		}
		setText('');
	}

	return (
		<View style={styles.container}>
			{momoUri !== null ? (
				<RNWeb uri={momoUri} closeWebView={closeWebView} />
			) : (
				<View style={styles.content}>
					<Ionicons
						name="ios-arrow-back"
						size={24}
						color="black"
						style={styles.back}
						onPress={() => navigation.goBack()}
					/>
					<View style={styles.btnContainer}>
						<Text style={styles.heading}>
							Link your MTN mobile money number
						</Text>
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
						<TransparentBtn label="Enter" handler={() => onSubmit(text)} />
					</View>
				</View>
			)}
		</View>
	);
};

export default LinkMomo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	content: {
		flex: 1,
		marginVertical: '10%',
		justifyContent: 'space-around',
	},
	back: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
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
