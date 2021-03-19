import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import GrayBox from '../components/GrayBox';
import { Spacing, Colors } from '../index';

const TopUpDialogBox = () => {
	return (
		<View style={styles.container}>
			<View style={styles.smallbox}></View>
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

			<Button label="Top up" />
		</View>
	);
};

export default TopUpDialogBox;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 400,
		backgroundColor: Colors.WHITE,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		// marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		paddingHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		zIndex: 2,
		elevation: 11,
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
	},
	row: {
		paddingHorizontal: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20,
	},
});
