import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import User from '../components/User';
import { Spacing, Colors } from '../index';
import MyKeyboard from '../components/MyKeyboard';

const MainScreen = ({ navigation }) => {
	// const trans = useSelector((state) => state.transaction);

	const [state, setState] = useState('0');

	const func = () => {
		if (parseInt(state) < 1) return;
		navigation.navigate('Pay', {
			state: state,
		});
	};
	const funct = () => {
		if (parseInt(state) < 1) return;
		navigation.navigate('Request', {
			state: state,
		});
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			setState('0');
		});

		return unsubscribe;
	}, [navigation]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<User
					color="white"
					marginHorizontal={Spacing.HORIZONTAL_WHITE_SPACE}
					handler={() => navigation.navigate('Profile')}
				/>

				<Text style={styles.output}>{`GH₵ ${state}`}</Text>
				<MyKeyboard setState={setState} state={state} />

				<View style={styles.keyContainer}>
					<View style={styles.btnContainer}>
						<Button
							label="Request"
							width="48%"
							btnColor="#12AA73"
							handler={funct}
						/>
						<Button label="Pay" width="48%" btnColor="#12AA73" handler={func} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.PRIMARY,
	},
	content: {
		flex: 1,
		marginVertical: '10%',
	},
	test: {
		backgroundColor: 'gray',
	},
	output: {
		fontSize: 40,
		color: Colors.WHITE,
		alignSelf: 'center',
	},
	keyContainer: {
		// marginVertical: 100,
		// justifyContent: 'space-between',
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 40,
	},
});
