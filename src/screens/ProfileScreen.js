import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Spacing, Colors } from '../index';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProfileContent from '../components/ProfileContent';
import TransparentBtn from '../components/TransparentBtn';
import { signOut } from '../store/actions/authActions';
import { connect } from 'react-redux';

const ProfileScreen = ({ navigation, signOut }) => {
	const handleSubmit = () => {
		signOut();
	};

	return (
		<View style={styles.container}>
			<Ionicons
				name="md-close"
				size={20}
				color="black"
				style={styles.back}
				onPress={() => navigation.navigate('Main')}
			/>
			<View style={styles.thinLine}></View>

			<View style={styles.bottomContent}>
				<View style={styles.user}>
					<View style={styles.circle}>
						<Feather
							name="camera"
							size={24}
							color="black"
							style={styles.icon}
						/>
					</View>
					<Text style={styles.usrname}>Huzaifah Attah</Text>
					<Text style={styles.tagname}>₵huzaifah</Text>
				</View>

				<View style={styles.content}>
					<ProfileContent />
					<ProfileContent />
					<ProfileContent />
					<ProfileContent />
				</View>

				<View style={styles.btnContainer}>
					<TransparentBtn label="Sign out" handler={() => handleSubmit()} />
				</View>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	back: {
		marginTop: '15%',
		marginLeft: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	thinLine: {
		height: 1,
		backgroundColor: Colors.GRAY_MEDIUM,
		marginTop: 20,
	},
	bottomContent: {
		flex: 1,
		justifyContent: 'space-evenly',
	},
	user: {
		// backgroundColor: 'red',
		// marginTop: 50,
	},
	circle: {
		// backgroundColor: 'black',
		height: 50,
		width: 50,
		alignSelf: 'center',
		borderRadius: 50,
		borderWidth: 0.5,
		borderColor: 'black',
		// flex: 1,
		position: 'relative',
	},
	icon: {
		position: 'absolute',
		alignSelf: 'center',
		top: '25%',
	},
	usrname: {
		alignSelf: 'center',
		marginTop: 10,
		fontWeight: 'bold',
		fontSize: 24,
	},
	tagname: {
		alignSelf: 'center',
		fontSize: 18,
		color: Colors.GRAY_MEDIUM,
		letterSpacing: 1,
	},
	content: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
});
