import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, Spacing } from '../index';
import GrayBox from '../components/GrayBox';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';

const ModalScreen = ({ navigation }) => {
	const [vl, setVl] = useState('');
	const [outClicked, setOutClicked] = useState(false);
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<AntDesign
					name="downcircleo"
					size={30}
					color="black"
					style={styles.downIcon}
				/>
			</TouchableOpacity>
			<Text style={styles.heading}>Top up Cash</Text>
			<View style={styles.boxContainer}>
				<View style={[styles.row, styles.first]}>
					<GrayBox
						value={'10'}
						setVl={setVl}
						color={'#e6e6e6'}
						outClicked={outClicked}
						setOutClicked={setOutClicked}
					/>
					<GrayBox
						value={'25'}
						setVl={setVl}
						color={'#e6e6e6'}
						outClicked={outClicked}
						setOutClicked={setOutClicked}
					/>
					<GrayBox
						value={'50'}
						setVl={setVl}
						color={'#e6e6e6'}
						outClicked={outClicked}
						setOutClicked={setOutClicked}
					/>
				</View>
				<View style={[styles.row, styles.second]}>
					<GrayBox value={'75'} setVl={setVl} color={'#e6e6e6'} />
					<GrayBox value={'100'} setVl={setVl} color={'#e6e6e6'} />
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('InputAmount');
						}}
					>
						<View
							style={{
								width: 65,
								height: 65,
								borderRadius: 15,
								backgroundColor: Colors.GRAY_LIGHT,
							}}
						>
							<Text
								style={{
									fontWeight: 'bold',
									fontSize: 18,
									alignSelf: 'center',
									marginTop: 20,
								}}
							>{`...`}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<Button
				label="Top up"
				handler={() =>
					navigation.navigate('LinkMomo', {
						value: vl,
					})
				}
			/>
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
	downIcon: {
		color: 'black',
		opacity: 0.5,
		alignSelf: 'center',
		marginTop: 10,
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
