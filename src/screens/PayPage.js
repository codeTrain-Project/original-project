import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {PayAmount}  from '../components/PayAmount';
import { Colors} from '../index';

export const PayPage = () => {
    return (
        <View style={styles.container}>
        <PayAmount/>
      </View>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});