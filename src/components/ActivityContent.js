import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing } from '../index';
import { format } from 'date-fns';

const ActivityContent = ({ data }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.date}>
					{format(
						new Date(data.date.toDate().toString()),
						'MMMM do, yyyy H:mma'
					)}
				</Text>

				<Text style={styles.transacType}>{data.transactionType}</Text>
				{data.transactionType === 'Debit' ? (
					<Text
						style={styles.text}
					>{`An amount of GH₵${data.amount} has been debited from your account and credited to ₵${data.reciever} for the purpose of ${data.purpose}`}</Text>
				) : data.transactionType === 'Credit' ? (
					<Text
						style={styles.text}
					>{`An amount of GH₵${data.amount} has been credited to your account from ₵${data.sender} for the purpose of ${data.purpose}`}</Text>
				) : data.transactionType === 'Requested' ? (
					<Text
						style={styles.text}
					>{`You requested an amount of GH₵${data.amount} from ₵${data.reciever} for the purpose of ${data.purpose}`}</Text>
				) : (
					<Text
						style={styles.text}
					>{`₵${data.sender} has made a request of GH₵${data.amount} to you for the purpose of ${data.purpose}`}</Text>
				)}
			</View>
		</View>
	);
};

export default ActivityContent;

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 0.2,
		borderBottomColor: 'black',
		marginVertical: 5,
	},
	content: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		paddingBottom: 10,
	},
	transacType: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	text: {
		color: Colors.GRAY_DARK,
	},
	date: {
		color: Colors.GRAY_DARK,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});
