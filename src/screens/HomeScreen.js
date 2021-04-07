import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import User from '../components/User';
import { Spacing, Colors } from '../index';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

function HomeScreen({ navigation, accounts, auth }) {
	// console.log('accounts', accounts);

	const account = accounts
		? accounts.find((account) => account.id === auth.uid)
		: null;

	console.log('Account', account);
	return (
		<View style={styles.container}>
			<Ionicons
				name="md-close"
				size={30}
				color="black"
				style={styles.back}
				onPress={() => navigation.navigate('Main')}
			/>
			<View style={styles.content}>
				<User
					marginHorizontal={Spacing.HORIZONTAL_WHITE_SPACE}
					mt={-40}
					handler={() => navigation.navigate('Profile')}
				/>
				<View style={styles.txtContainer}>
					{account ? (
						<Text style={styles.amount}>{`GH₵ ${account.balance}`}</Text>
					) : null}

					<Text style={styles.subHeading}>Money Balance</Text>
				</View>
				<View style={styles.btnContainer}>
					<Button
						label="Top up Money"
						btnColor="#E1E1E1"
						textColor="black"
						width="48%"
						handler={() => navigation.navigate('Modal')}
					/>
					<Button
						label="Cash Out"
						btnColor="#E1E1E1"
						textColor="black"
						width="48%"
						handler={() => navigation.navigate('Modal')}
					/>
				</View>
				<View style={styles.linkContainer}>
					<View style={styles.link}>
						<View>
							<View style={styles.linkBox}></View>
							<Entypo
								name="plus"
								size={24}
								color="#A6A2A2"
								style={styles.icon}
							/>
						</View>
						<Text style={styles.text}>Link Bank</Text>
					</View>
					<Ionicons name="ios-arrow-forward" size={24} color="#A6A2A2" />
				</View>
			</View>
		</View>
	);
}

const mapStateToProps = (state) => ({
	accounts: state.firestore.ordered.accounts,
	auth: state.firebase.auth,
});

const mapDispatchToProps = {};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{ collection: 'accounts' }])
)(HomeScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	back: {
		marginTop: '20%',
		marginLeft: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	content: {
		flex: 1,
		marginTop: '25%',
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
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 50,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
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
	bacground: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'black',
		opacity: 0.4,
		zIndex: 1,
		elevation: 10,
	},
});
