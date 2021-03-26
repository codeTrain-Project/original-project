import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RequestAmount } from '../components/RequestAmount';
import {Colors} from '../index';

export const RequestPage = () => {
    return (
        <View style={styles.container}>
            <RequestAmount/>
        </View>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});

