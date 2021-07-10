import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function GoalItem(props) {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goalField}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    goalField: {
        borderColor:"black",
        borderWidth: 1,
        height: 35,
        justifyContent: 'center',
        marginLeft:10,
        marginRight: 10,
        marginTop: 10,
        alignItems:"center",
        backgroundColor: "#ff9999",
      },
})

export default GoalItem;