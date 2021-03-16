import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import User from '../components/User';
import { Spacing, Colors } from '../index';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<User marginHorizontal={0} />
			<View style={styles.txtContainer}>
				<Text style={styles.amount}> GH₵0.00</Text>
				<Text style={styles.subHeading}>Money Balance</Text>
			</View>
			<View style={styles.btnContainer}>
				<Button
					label="Top up Money"
					btnColor="#E1E1E1"
					textColor="black"
					width="48%"
				/>
				<Button
					label="Cash Out"
					btnColor="#E1E1E1"
					textColor="black"
					width="48%"
				/>
			</View>
			<View style={styles.linkContainer}>
				<View style={styles.link}>
					<View>
						<View style={styles.linkBox}></View>
						<Entypo name="plus" size={24} color="#A6A2A2" style={styles.icon} />
					</View>
					<Text style={styles.text}>Link Bank</Text>
				</View>
				<Ionicons name="ios-arrow-forward" size={24} color="#A6A2A2" />
			</View>
			{/* TODO */}
			{/* MAKE THE WIDTH COVER FULL SCREEN/ */}
			<Menu backgroundColor={Colors.WHITE} color="black" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginTop: '15%',
	},
	txtContainer: {
		marginTop: 70,
	},
	amount: {
		fontSize: 38,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subHeading: {
		fontSize: 16,
		textAlign: 'center',
		color: '#A6A2A2',
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 50,
	},
	link: {
		// backgroundColor: 'red',
		flexDirection: 'row',
		alignItems: 'center',
	},
	linkBox: {
		width: 42,
		height: 42,
		backgroundColor: '#E5E5E5',
		borderRadius: 10,
	},
	icon: {
		position: 'absolute',
		top: 10,
		left: 10,
	},
	text: {
		color: '#A6A2A2',
		fontSize: 18,
		marginLeft: 20,
	},
});
