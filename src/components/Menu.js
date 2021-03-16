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

const Menu = ({
	backgroundColor = '#12AA73',
	color = Colors.WHITE,
	border = 1,
}) => {
	return (
		<View
			style={{
				...styles.parentContainer,
				backgroundColor,
				borderTopWidth: border,
			}}
		>
			<View style={styles.container}>
				<TouchableOpacity>
					<MaterialCommunityIcons name="home-variant" size={30} color={color} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={{ ...styles.txt, color, ...styles.icon }}>₵</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Fontisto name="clock" size={30} style={styles.icon} color={color} />
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
		borderTopWidth: 1,
		borderTopColor: Colors.GRAY_LIGHT,
	},
	container: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	txt: {
		fontSize: 30,
	},
	icon: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,

		elevation: 14,
	},
});
