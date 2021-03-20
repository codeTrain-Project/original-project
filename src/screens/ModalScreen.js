import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, Spacing } from '../index';
import GrayBox from '../components/GrayBox';
import Button from '../components/Button';

const ModalScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<View style={styles.smallbox}></View>
			</TouchableOpacity>
			<Text style={styles.heading}>Top up Cash</Text>
			<View style={styles.boxContainer}>
				<View style={[styles.row, styles.first]}>
					<GrayBox value={'₵10'} />
					<GrayBox value={'₵25'} />
					<GrayBox value={'₵50'} />
				</View>
				<View style={[styles.row, styles.second]}>
					<GrayBox value={'₵75'} />
					<GrayBox value={'₵100'} />
					<GrayBox value={'...'} />
				</View>
			</View>

			<Button label="Top up" handler={() => navigation.navigate('Add Money')} />
		</View>
	);
};

export default ModalScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 400,
		// backgroundColor: 'red',
		position: 'absolute',
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: Colors.WHITE,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		// marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		paddingHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	smallbox: {
		height: 6,
		width: 40,
		backgroundColor: Colors.GRAY_LIGHT,
		alignSelf: 'center',
		marginTop: 10,
		borderRadius: 200,
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 20,
		alignSelf: 'center',
		marginTop: 30,
		letterSpacing: 1,
		opacity: 0.7,
	},
	row: {
		paddingHorizontal: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20,
	},
});