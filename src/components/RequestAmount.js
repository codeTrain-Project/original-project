import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { Colors, Spacing } from '../index';
import Button from '../components/Button';
import { Feather } from '@expo/vector-icons';

export const RequestAmount = ({ heading, label }) => {
    const [text, setText] = useState('');
	const changeText = (newText) => {
		setText(newText);
	};
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Feather 
        name="x" 
        size={22} 
        color="black" 
         style={styles.headericon}   
        />
        <Text style={styles.headeramount}>₵20</Text>
        <Button 
            label="Pay"
            height={25}
            width={60}
         />


        </View>



        <View style={styles.btnContainer}>
            <Text style={styles.text}>To:</Text>
            <TextInput
					autoCorrect={false}
					style={styles.input}
					placeholder="Handy tag"
					onSubmitEditing={Keyboard.dismiss}
					defaultValue={text}
				/>
        </View>

        <View style={styles.btnContainer}>
            <Text style={styles.text}>For:</Text>
            <TextInput
					autoCorrect={false}
					style={styles.input}
					placeholder="Add a note"
					onSubmitEditing={Keyboard.dismiss}
					defaultValue={text}
				/>
        </View>

        <View style={styles.contacttext}>
             <Text style={styles.contact}>CONTACTS</Text>
        </View>
        <View style={styles.btnContaine}>
        <Button
					label="Enable Contacts"
					height={50}
                    width={300}
					borderRadius={10}
					btnColor={Colors.WHITE}
					textColor="#46D8A3"
				/>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: '10%',
	},
    header: {
        marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headeramount:{
     marginTop: 27,
     fontSize: 17,
    },
    headericon:{
        marginTop: 25,
    }
    ,
	input: {
		fontSize:20,
        marginLeft: 5,
	},
	btnContainer: {
		marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
        flexDirection: 'row',
	},
    textContainer: {
        flexDirection: 'row',
    },
    text: {
        marginVertical: 10,
        fontSize:20,
    },
    contact: {
        fontSize:15,
        marginVertical:7,
        marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,

    },
    contacttext:{
        height:30,
        width:'100%',
        backgroundColor:Colors.GRAY_LIGHT,

    },
    btnContaine:{
        marginHorizontal: Spacing.HORIZONTAL_WHITE_SPACE,
        marginHorizontal:35
    }
});
