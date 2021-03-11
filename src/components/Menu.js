import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Touchable,
} from 'react-native';
import { Spacing, Colors } from '../index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Menu = () => {
	return (
		<View style={styles.parentContainer}>
			<View style={styles.container}>
				<TouchableOpacity>
					<MaterialCommunityIcons
						name="home-variant"
						size={30}
						color={Colors.WHITE}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.txt}>₵</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Fontisto name="clock" size={30} color={Colors.WHITE} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Menu;

const styles = StyleSheet.create({
	parentContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	container: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	txt: {
		fontSize: 30,
		color: Colors.WHITE,
	},
});
