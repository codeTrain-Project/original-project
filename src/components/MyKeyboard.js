import roundToNearestMinutesWithOptions from 'date-fns/esm/fp/roundToNearestMinutesWithOptions';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors, Spacing } from '../index';
import { Feather } from '@expo/vector-icons';

const MyKeyboard = ({ setState, state }) => {
	const [one, setOne] = useState('1');
	const [two, setTwo] = useState('2');
	const [three, setThree] = useState('3');
	const [four, setFur] = useState('4');
	const [five, setFive] = useState('5');
	const [six, setSix] = useState('6');
	const [seven, setSeven] = useState('7');
	const [eight, setEight] = useState('8');
	const [nine, setNine] = useState('9');
	const [zero, setZero] = useState('0');
	const [dot, setDot] = useState('.');
	const [bck, setBck] = useState('bc');

	return (
		<View style={styles.container}>
			<View style={styles.row1}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? one : prev + one;
						});
					}}
				>
					<Text style={styles.num}>{one}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? two : prev + two;
						});
					}}
				>
					<Text style={styles.num}>{two}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? three : prev + three;
						});
					}}
				>
					<Text style={styles.num}>{three}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.row1}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? four : prev + four;
						});
					}}
				>
					<Text style={styles.num}>{four}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? five : prev + five;
						});
					}}
				>
					<Text style={styles.num}>{five}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? six : prev + six;
						});
					}}
				>
					<Text style={styles.num}>{six}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.row1}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? seven : prev + seven;
						});
					}}
				>
					<Text style={styles.num}>{seven}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? eight : prev + eight;
						});
					}}
				>
					<Text style={styles.num}>{eight}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? nine : prev + nine;
						});
					}}
				>
					<Text style={styles.num}>{nine}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.row1}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							if (prev[prev.length - 1] === '.') {
								return prev;
							} else if (prev.includes('.')) {
								return prev;
							} else {
								return prev + dot;
							}
						});
					}}
				>
					<Text style={[styles.num, styles.dot]}>{dot}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (state.length > 8) return;
						setState((prev) => {
							return prev === '0' ? zero : prev + zero;
						});
					}}
				>
					<Text style={styles.num}>{zero}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.btn}
					onPress={() =>
						setState((prev) => {
							if (prev.length === 1) {
								return '0';
							} else {
								return prev.slice(0, -1);
							}
						})
					}
				>
					<Feather name="delete" size={24} color="white" />

					{/* <Text style={styles.num}>{bck}</Text> */}
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MyKeyboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
		justifyContent: 'space-evenly',
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
	},
	row1: {
		// backgroundColor: 'green',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	btn: {
		// backgroundColor: 'yellow',
	},
	num: {
		fontSize: 30,
		color: 'white',
	},
	image: {
		backgroundColor: Colors.WHITE,
	},
});
