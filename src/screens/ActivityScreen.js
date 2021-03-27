import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {Colors, Spacing} from '../index';
import { Feather } from '@expo/vector-icons';
import User from '../components/User'
export const ActivityScreen = () => {
    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.heading}>Activity</Text>
            <User color="black" style={styles.user}/>
        </View>

        <Text style={styles.text}>No Activities recorded </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
        marginTop:'10%'
	},
    content: {
        flexDirection: 'row',
        marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
        justifyContent: 'space-between',
    },
    heading: {
        fontWeight:'bold',
        fontSize:25,
        marginTop:'2%'
    },
    text: {
        color:"#b5b3ae",
        textAlign: 'center',
        marginTop:'10%'
    }
});
