import React from 'react';
import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
} from 'react-native';
import { Colors, Spacing } from '../index';
import { Feather } from '@expo/vector-icons';
import User from '../components/User';
import ActivityContent from '../components/ActivityContent';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const ActivityScreen = ({ id, PersonalTransactions }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.heading}>Activity</Text>
					<View style={styles.subHeader}>
						<Feather
							name="search"
							style={styles.icon}
							size={25}
							color="black"
						/>
						<User color="black" mt={0} />
					</View>
				</View>

				<View style={styles.subContent}>
					{PersonalTransactions ? (
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
					)}
				</View>
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
	icon: {
		marginRight: 10,
	},
	text: {
		color: Colors.GRAY_DARK,
		textAlign: 'center',
		marginTop: '10%',
	},
});
