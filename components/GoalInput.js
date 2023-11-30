import {View, StyleSheet, TextInput, Button, Modal, Image} from "react-native";
import {useState} from "react";

const GoalInput = ({onAddGoal, visible, onCancel}) => {
    const [goal, setGoal] = useState('');

    function goalInputHandler(enteredText) {
        setGoal(enteredText);
    }

    function addGoalHandler() {
        onAddGoal(goal);
        setGoal('');
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    placeholder='Your course goal!'M
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    clearButtonMode="always"
                    value={goal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: '#CCCCCC',
        backgroundColor: '#311b6b',
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        // shadowColor: '#CCCCCC',
        // shadowOpacity: 15,
        // shadowRadius: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});

export default GoalInput;