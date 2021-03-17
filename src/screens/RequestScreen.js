
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import ButtonS from '../components/ButtonS';
import {Typography, Colors} from '../index';
import { Spacing } from '../index';
import { Feather } from '@expo/vector-icons';
const RequestScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                   <Feather name="x" size={24} color="black" />
                    <Text>₵20</Text>
                    <ButtonS label="Request" width="25%"  />
                </View>

            </View>
        </View>
    )
}
export default RequestScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
		marginVertical: '10%',
		// justifyContent: 'space-between',
	},
    text: {
		fontSize: Typography.FONT_SIZE_NORMAL,
		color: 'black',
		opacity: 0.7,
	},
    header:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor:Colors.SECONDARY,
    },
});
