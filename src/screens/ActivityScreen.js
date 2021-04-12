import React, { useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
} from 'react-native';
import { Colors, Spacing } from '../index';
import { Feather } from '@expo/vector-icons';
import User from '../components/User';
import ActivityContent from '../components/ActivityContent';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Ionicons } from '@expo/vector-icons';

const ActivityScreen = ({ id, PersonalTransactions, navigation }) => {
	const [state, setState] = useState(false);
	const [search, setSearch] = useState('');

	const output = PersonalTransactions ? (
		<SafeAreaView>
			<FlatList
				data={PersonalTransactions}
				renderItem={({ item }) => {
					return <ActivityContent data={item} />;
				}}
				keyExtractor={(item, index) => item.id}
			/>
		</SafeAreaView>
	) : (
		<Text style={styles.text}>No Activities recorded </Text>
	);

	const usersSearched = PersonalTransactions
		? PersonalTransactions.filter((user) => {
				if (user.reciever.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
					return user;
				}
		  })
		: null;

	const outputTwo = usersSearched ? (
		<SafeAreaView>
			<FlatList
				data={usersSearched}
				renderItem={({ item }) => {
					return <ActivityContent data={item} />;
				}}
				keyExtractor={(item, index) => item.id}
			/>
		</SafeAreaView>
	) : (
		<Text style={styles.text}>Search not found </Text>
	);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.header}>
					{state ? (
						<TextInput
							placeholder="Search by tagName"
							placeholderTextColor="#cacaca"
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							onChangeText={(text) => setSearch(text)}
						/>
					) : (
						<Text style={styles.heading}>Activity</Text>
					)}

					<View style={styles.subHeader}>
						{state ? (
							<Ionicons
								name="md-close"
								size={30}
								color="black"
								style={styles.back}
								onPress={() => setState(!state)}
							/>
						) : (
							<Feather
								name="search"
								style={styles.icon}
								size={25}
								color="black"
								onPress={() => setState(!state)}
							/>
						)}

						{state ? null : (
							<User
								color="black"
								mt={0}
								handler={() => navigation.navigate('Profile')}
							/>
						)}
					</View>
				</View>

				<View style={styles.subContent}>{state ? outputTwo : output}</View>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	id: state.firebase.auth.uid,
	PersonalTransactions: state.firestore.ordered.PersonalTransactions,
});

const mapDispatchToProps = {};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect((props) => [
		{
			collection: 'transactions',
			doc: `${props.id}`,
			subcollections: [
				{ collection: 'PersonalTransactions', orderBy: ['date', 'desc'] },
			],
			storeAs: 'PersonalTransactions',
		},
	])
)(ActivityScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
		marginTop: '10%',
	},
	content: {
		flex: 1,
	},

	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	subHeader: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 25,
		// marginTop: '2%',
	},

	input: {
		textAlign: 'left',
		fontSize: 18,
		height: 40,
		backgroundColor: Colors.GRAY_LIGHT,
		width: '90%',
		borderRadius: 200,
		paddingLeft: 20,
		marginTop: 20,
	},
	back: {
		marginRight: 10,
		marginTop: 20,
	},

	icon: {
		marginRight: 10,
	},
	text: {
		color: Colors.GRAY_DARK,
		textAlign: 'center',
		marginTop: '10%',
	},
});
