import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {
    const [entered, setEntered] = useState('');
    
    const handleChange = (enteredText) => {
        setEntered(enteredText);
    }

    const addHandler = () => {
        props.addItem(entered);
        setEntered("")
    }

    return (
        <Modal visible={props.mode} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput placeholder="New Goal" style={styles.input} value={entered} onChangeText={handleChange}/>
            <View style={styles.butns}>
                <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancel} /></View>
                <View style={styles.button}><Button title="Add" style={styles.butn} onPress={addHandler}/></View>
            </View>
        </View>
        </Modal>
    )        
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      input: {
        borderColor:"black",
        borderWidth: 1,
        padding: 10,
        marginLeft:5,
        width:'80%',
        paddingBottom: 10
      },
      butns: {
          flexDirection: 'row',
          justifyContent: "space-between",
          width:"60%",
          marginTop: 10
      },
      button: {
          width:'40%',
      }
})

export default GoalInput;