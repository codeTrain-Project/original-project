import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransparentBtn from '../components/TransparentBtn';
import { Colors, Spacing } from '../index';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SuccessfulScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Ionicons
					name="md-close"
					size={30}
					color="black"
					style={styles.back}
					onPress={() => navigation.navigate('Main')}
				/>

				<View style={styles.headingContent}>
					<MaterialIcons
						name="done-all"
						size={150}
						color={Colors.PRIMARY}
						style={styles.icon}
					/>
					<Text style={styles.heading}>SUCCESFUL TRANSACTION</Text>
				</View>

				<TransparentBtn
					label="Done"
					handler={() => navigation.navigate('Main')}
				/>
			</View>
		</View>
	);
};

export default SuccessfulScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	content: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '20%',
		justifyContent: 'space-between',
	},

	back: {
		fontWeight: 'bold',
	},
	headingContent: {
		alignSelf: 'center',
	},
	icon: {
		alignSelf: 'center',
	},
	heading: {
		textAlign: 'center',
		fontSize: 18,
		letterSpacing: 1,
	},
});
